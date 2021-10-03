import Plausible from 'plausible-tracker';

const selectors = 'a, a[data-analytics], button[data-analytics]';
const trackedElements: Set<HTMLElement> = new Set();
let observer: MutationObserver;

const plausible = Plausible({
  domain: process.env.NUXT_ENV_PLAUSIBLE_DOMAIN,
  trackLocalhost: true,
});

function observeMutations() {
  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes') {
        // Handle changed attributes
        removeNode(mutation.target);
        addNode(mutation.target);

      } else if (mutation.type === 'childList') {
        // Handle child nodes
        mutation.addedNodes.forEach(addNode);
        mutation.removedNodes.forEach(removeNode);
      }
    })
  });

  observer.observe(document, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ['href', 'data-analytics']
  });
}

function readAnalyticsAttribute(data: string): [string, object] {
  const attributes = data.split(/,(.+)/);
  return [JSON.parse(attributes[0]), JSON.parse(attributes[1] || '{}')];
}

function onAnchorClickEvent(event: any) {
  let link = event.target;
  const middle = event.type === 'auxclick' && event.button === 2;
  const click = event.type === 'click';

  while (link && (typeof link.tagName === 'undefined' || link.tagName.toLowerCase() !== 'a' || !link.href)) {
    link = link.parentNode;
  }

  if (middle || click) {
    if (link.hasAttribute('data-analytics')) {
      plausible.trackEvent(...readAnalyticsAttribute(link.getAttribute('data-analytics')));
    } else {
      plausible.trackEvent('Outbound Link: Click', { props: { url: link.href }});
    }
  }
}

function onButtonClickEvent(event: any) {
  plausible.trackEvent(event.target.getAttribute('data-analytics'));
}

function addNode(node: any) {
  if (node instanceof HTMLAnchorElement) {
    if(node.host !== window.location.host) {
      node.addEventListener('click', onAnchorClickEvent);
      node.addEventListener('auxclick', onAnchorClickEvent);
      trackedElements.add(node);
    }
  } else if (node instanceof HTMLButtonElement) {
    if(node.hasAttribute('data-analytics')) {
      node.addEventListener('click', onButtonClickEvent);
      node.addEventListener('auxclick', onButtonClickEvent);
      trackedElements.add(node);
    }
  } else if ('querySelectorAll' in node) {
    node.querySelectorAll(selectors).forEach(addNode);
  }
}

function removeNode(node: any) {
  if (node instanceof HTMLAnchorElement) {
    node.removeEventListener('click', onAnchorClickEvent);
    node.removeEventListener('auxclick', onAnchorClickEvent);
    trackedElements.delete(node);
  } else if (node instanceof HTMLButtonElement) {
    node.removeEventListener('click', onButtonClickEvent);
    node.removeEventListener('auxclick', onButtonClickEvent);
    trackedElements.delete(node);
  } else if ('querySelectorAll' in node) {
    node.querySelectorAll(selectors).forEach(removeNode);
  }

  return function cleanup() {
    trackedElements.forEach((element) => {
      element.removeEventListener('click',
        element instanceof HTMLAnchorElement ? onAnchorClickEvent : onButtonClickEvent);
      element.removeEventListener('auxclick',
        element instanceof HTMLAnchorElement ? onAnchorClickEvent : onButtonClickEvent);
    });

    trackedElements.clear();
    observer.disconnect();
  }
}

function trackElements() {
  document.querySelectorAll(selectors).forEach(addNode);
}

plausible.enableAutoPageviews();
trackElements();
observeMutations();

export default plausible;
