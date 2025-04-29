document.addEventListener("DOMContentLoaded", function () {
    const languageDropdowns = document.querySelectorAll("#languageDropdown");
    const currentLanguageSpans = document.querySelectorAll("#currentLanguage");

    const languages = {
        "en": "English",
        "de": "Deutsch",
        "fr": "Français"
        // weitere Sprachen hier ergänzen
    };

    const path = window.location.pathname;

    // Neuer, robuster Regex – findet V1.5, V1.5_de, V1.5_fr usw.
    const folderMatch = path.match(/(V\d+\.\d+)(?:_([a-z]{2}))?(?=\/)/);

    let version = "unknown";
    let lang = "en"; // Defaultsprache

    if (folderMatch) {
        version = folderMatch[1];
        if (folderMatch[2]) {
            lang = folderMatch[2];
        }
    }

    // Setze aktuelle Sprache im UI
    currentLanguageSpans.forEach(span => {
        span.textContent = languages[lang];
    });

    // Vereinfachte Variante: Keine fetch-Prüfung – alles anzeigen
    Object.entries(languages).forEach(([code, label]) => {
        const item = document.createElement("div");
        item.classList.add("dropdown-item");
        item.textContent = label;
        item.addEventListener("click", () => switchLanguage(code));
        languageDropdowns.forEach(dd => dd.appendChild(item.cloneNode(true)));
    });

    function switchLanguage(targetLang) {
        if (targetLang === lang) return;

        // Pfad neu zusammensetzen
        const newFolder = (targetLang === "en") ? `${version}` : `${version}_${targetLang}`;
        const newPath = path.replace(/(V\d+\.\d+)(_[a-z]{2})?(?=\/)/, newFolder);
        window.location.href = newPath;
    }
});
