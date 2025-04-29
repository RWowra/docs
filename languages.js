document.addEventListener("DOMContentLoaded", function () {
    const languageDropdown = document.getElementById("languageDropdown");
    const currentLanguageSpan = document.getElementById("currentLanguage");

    const languages = {
        "en": "English",
        "de": "Deutsch",
        "fr": "Français"
    };

    const path = window.location.pathname;

    // Pfad analysieren: z. B. /V1.2_de/ → version = V1.2, lang = de
    const folderMatch = path.match(/\/(V\d+\.\d+)(?:_([a-z]{2}))?\//);

    let version = "unknown";
    let lang = "en"; // Standard: Englisch

    if (folderMatch) {
        version = folderMatch[1];
        if (folderMatch[2]) {
            lang = folderMatch[2];
        }
    }

    // Aktuelle Sprache anzeigen
    currentLanguageSpan.textContent = languages[lang] || "Unknown";

    // Dropdown befüllen
    Object.entries(languages).forEach(([code, label]) => {
        const item = document.createElement("div");
        item.classList.add("dropdown-item");
        item.textContent = label;

        item.addEventListener("click", () => {
            let newPath;

            if (code === "en") {
                newPath = path.replace(/\/V\d+\.\d+(_[a-z]{2})?\//, `/${version}/`);
            } else {
                newPath = path.replace(/\/V\d+\.\d+(_[a-z]{2})?\//, `/${version}_${code}/`);
            }

            // Navigation zur Sprachversion
            window.location.pathname = newPath;
        });

        languageDropdown.appendChild(item);
    });

    // Dropdown öffnen/schließen
    currentLanguageSpan.addEventListener("click", () => {
        languageDropdown.classList.toggle("show");
    });

    // Klick außerhalb schließt Dropdown
    document.addEventListener("click", function (e) {
        if (!languageDropdown.contains(e.target) && e.target !== currentLanguageSpan) {
            languageDropdown.classList.remove("show");
        }
    });
});
