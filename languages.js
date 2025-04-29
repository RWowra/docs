document.addEventListener("DOMContentLoaded", function () {
    const languageDropdowns = document.querySelectorAll("#languageDropdown");
    const currentLanguageSpans = document.querySelectorAll("#currentLanguage");

    const languages = {
        "en": "English",
        "de": "Deutsch",
        "fr": "Français"
    };

    const urlPath = window.location.pathname;
    const fileName = urlPath.substring(urlPath.lastIndexOf("/") + 1);
    const versionMatch = urlPath.match(/\/(V\d+\.\d+)(_de|_fr)?\//);
    const currentVersion = versionMatch ? versionMatch[1] : null;

    let currentLanguage = "en";
    if (urlPath.includes("_de/") || fileName.includes("_DE")) {
        currentLanguage = "de";
    } else if (urlPath.includes("_fr/") || fileName.includes("_FR")) {
        currentLanguage = "fr";
    }

    currentLanguageSpans.forEach(span => {
        span.textContent = languages[currentLanguage];
    });

    function checkIfLanguageExists(lang) {
        if (lang === "en") return Promise.resolve(true);
        const langFolder = `/${currentVersion}_${lang}/`;
        const langPath = urlPath.replace(/\/(V\d+\.\d+)(_de|_fr)?\//, langFolder);
        return fetch(langPath, { method: 'HEAD' }).then(res => res.ok).catch(() => false);
    }

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

                languageDropdowns.forEach(dropdown => {
                    dropdown.appendChild(langOption.cloneNode(true));
                });
            }
        }
    }

    function switchLanguage(targetLang) {
        if (targetLang === currentLanguage) return;
        let newPath;
        if (targetLang === "en") {
            newPath = urlPath.replace(/\/(V\d+\.\d+)(_de|_fr)?\//, `/${currentVersion}/`);
            newPath = newPath.replace(/_DE|_FR/, "_EN");
        } else {
            newPath = urlPath.replace(/\/(V\d+\.\d+)(_de|_fr)?\//, `/${currentVersion}_${targetLang}/`);
            newPath = newPath.replace(/_EN|_DE|_FR/, `_${targetLang.toUpperCase()}`);
        }
        window.location.href = newPath;
    }

    buildLanguageDropdown();
});
