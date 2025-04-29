document.addEventListener("DOMContentLoaded", function () {
    const languageDropdown = document.getElementById("languageDropdown");
    const currentLanguageSpan = document.getElementById("currentLanguage");

    // Unterstützte Sprachen
    const languages = {
        "en": "English",
        "de": "Deutsch",
        "fr": "Français"
    };

    // Erkennung der aktuellen URL
    const urlPath = window.location.pathname;
    const fileName = urlPath.substring(urlPath.lastIndexOf("/") + 1);

    // Aktuelle Version erkennen (z.B. V1.1, V1.2, etc.)
    const versionMatch = urlPath.match(/\/(V\d+\.\d+)(_de|_fr)?\//);
    const currentVersion = versionMatch ? versionMatch[1] : null;

    // Aktuelle Sprache erkennen
    let currentLanguage = "en"; // Standard Englisch
    if (urlPath.includes("_de/") || fileName.includes("_DE")) {
        currentLanguage = "de";
    } else if (urlPath.includes("_fr/") || fileName.includes("_FR")) {
        currentLanguage = "fr";
    }

    // Setze die aktuelle Sprache im Footer
    currentLanguageSpan.textContent = languages[currentLanguage];

    // Hilfsfunktion: Prüfen, ob eine Sprachversion existiert
    function checkIfLanguageExists(lang) {
        if (lang === "en") {
            // Englisch existiert immer als Default
            return true;
        }
        const langFolder = `/${currentVersion}_${lang}/`;
        const langPath = urlPath.replace(/\/(V\d+\.\d+)(_de|_fr)?\//, langFolder);
        return fetch(langPath, { method: 'HEAD' })
            .then(response => response.ok)
            .catch(() => false);
    }

    // Dropdown dynamisch aufbauen
    async function buildLanguageDropdown() {
        for (const [langCode, langName] of Object.entries(languages)) {
            const exists = await checkIfLanguageExists(langCode);
            if (exists) {
                const langOption = document.createElement("div");
                langOption.classList.add("dropdown-item");
                langOption.textContent = langName;
                langOption.addEventListener("click", function () {
                    switchLanguage(langCode);
                });
                languageDropdown.appendChild(langOption);
            }
        }
    }

    // Sprachwechsel-Funktion
    function switchLanguage(targetLang) {
        if (targetLang === currentLanguage) return; // keine Aktion nötig

        let newPath;
        if (targetLang === "en") {
            // Englisch -> Sprachordner entfernen
            newPath = urlPath.replace(/\/(V\d+\.\d+)(_de|_fr)?\//, `/${currentVersion}/`);
            newPath = newPath.replace(/_DE|_FR/, "_EN");
        } else {
            // Andere Sprache -> Sprachordner einfügen
            newPath = urlPath.replace(/\/(V\d+\.\d+)(_de|_fr)?\//, `/${currentVersion}_${targetLang}/`);
            newPath = newPath.replace(/_EN|_DE|_FR/, `_${targetLang.toUpperCase()}`);
        }

        window.location.href = newPath;
    }

    buildLanguageDropdown();
});
