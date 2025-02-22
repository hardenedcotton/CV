const urlParams = new URLSearchParams(window.location.search);
function setLanguage(lang) {
  fetch(`locales/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      const templateSource = document.getElementById('cv-template').innerHTML;
      const template = Handlebars.compile(templateSource);
      document.getElementById('cv-content').innerHTML = template(data);
      initializeTheme();

    });
    const newUrl = window.location.pathname + `?lang=${lang}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
}
if (urlParams.get("lang")) {
    setLanguage(urlParams.get("lang"));
}
else {
    setLanguage("en")
}