export default (context) => {
  const observer = new MutationObserver(() => {
    const theme = context.$cookies.get('theme');
    const activeTheme = document
      .querySelector('html')
      .getAttribute('data-theme');

    if (theme && activeTheme !== theme) {
      document.querySelector('html').setAttribute('data-theme', theme);
    }
  });

  // Listen to attribute changes to properly apply the current theme
  observer.observe(document.documentElement, {
    attributes: true,
  });
};
