import Plausible from 'plausible-tracker'

/*
 * Custom implementation for outbound link(<a>/</a>) tracking.
 * Does not effect how the specified link will be opened.
 * Inspired by the origin method from plausible-tracker.
 */
function enableAutoOutboundTracking(plausible: any) {
  const EVENT_GOAL = 'Outbound Link: Click'
  const tracked: Set<HTMLAnchorElement> = new Set()

  function trackClick(this: HTMLAnchorElement) {
    plausible.trackEvent(EVENT_GOAL, { props: { url: this.href } })
  }

  function addNode(node: any) {
    if (node instanceof HTMLAnchorElement) {
      if (node.host !== location.host) {
        node.addEventListener('click', trackClick)
        tracked.add(node)
      }
    } else if ('querySelectorAll' in node) {
      node.querySelectorAll('a').forEach(addNode)
    }
  }

  function removeNode(node: any) {
    if (node instanceof HTMLAnchorElement) {
      node.removeEventListener('click', trackClick)
      tracked.delete(node)
    } else if ('querySelectorAll' in node) {
      node.querySelectorAll('a').forEach(removeNode)
    }

    return function cleanup() {
      tracked.forEach((a) => {
        a.removeEventListener('click', trackClick)
      })

      tracked.clear()
      observer.disconnect()
    }
  }

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes') {
        // Handle changed href
        removeNode(mutation.target)
        addNode(mutation.target)
      } else if (mutation.type === 'childList') {
        // Handle added nodes
        mutation.addedNodes.forEach(addNode)
        // Handle removed nodes
        mutation.removedNodes.forEach(removeNode)
      }
    })
  })

  // Track existing nodes
  document.querySelectorAll('a').forEach(addNode)

  // Observe mutations
  observer.observe(document, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ['href'],
  })
}

const plausible = Plausible({
  domain: process.env.NUXT_ENV_PLAUSIBLE_DOMAIN,
  trackLocalhost: process.env.NODE_ENV === 'development',
})

plausible.enableAutoPageviews()
enableAutoOutboundTracking(plausible)

export default plausible
