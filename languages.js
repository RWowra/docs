document.addEventListener("DOMContentLoaded", function () {
    const languageDropdowns = document.querySelectorAll("#languageDropdown");
    const currentLanguageSpans = document.querySelectorAll("#currentLanguage");

    const languages = {
        "en": "English",
        "de": "Deutsch",
        "fr": "Français"
    };

    const path = window.location.pathname;

    // Sucht z.B. V1.1 oder V1.1_de oder V1.2_fr an beliebiger Stelle
    const folderMatch = path.match(/\/(V\d+\.\d+)(?:_([a-z]{2}))?\//);

    let version = "unknown";
    let lang = "en"; // Default

    if (folderMatch) {
        version = folderMatch[1];
        if (folderMatch[2]) {
            lang = folderMatch[2];
        }
    }

    currentLanguageSpans.forEach(span => {
        span.textContent = languages[lang] || "Unknown";
    });

    Object.entries(languages).forEach(([code, label]) => {
        const item = document.createElement("div");
        item.classList.add("dropdown-item");
        item.textContent = label;
        item.addEventListener("click", () => switchLanguage(code));
        languageDropdowns.forEach(dd => dd.appendChild(item.cloneNode(true)));
    });

    function switchLanguage(targetLang) {
        if (targetLang === lang) return;

        const newFolder = (targetLang === "en") ? version : `${version}_${targetLang}`;
        const newPath = path.replace(/\/V\d+\.\d+(?:_[a-z]{2})?\//, `/${newFolder}/`);
        window.location.href = newPath;
    }
});
