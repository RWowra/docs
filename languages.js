document.addEventListener("DOMContentLoaded", function () {
    const languageDropdowns = document.querySelectorAll("#languageDropdown");
    const currentLanguageSpans = document.querySelectorAll("#currentLanguage");

    const languages = {
        "en": "English",
        "de": "Deutsch",
        "fr": "Français"
        // neue Sprachen hier hinzufügen
    };

    const path = window.location.pathname;
    const folderMatch = path.match(/\/(V\d+\.\d+)(?:_([a-z]{2}))?\//);

    let version = "unknown";
    let lang = "en"; // Standard

    if (folderMatch) {
        version = folderMatch[1];
        if (folderMatch[2]) {
            lang = folderMatch[2];
        }
    }

    currentLanguageSpans.forEach(span => {
        span.textContent = languages[lang];
    });

    function checkIfLanguageFolderExists(languageCode) {
        if (languageCode === "en") {
            // EN ist immer vorhanden (ohne Suffix)
            return Promise.resolve(true);
        }

        const testUrl = `/${version}_${languageCode}/`;
        return fetch(testUrl, { method: 'HEAD' })
            .then(res => res.ok)
            .catch(() => false);
    }

    async function buildLanguageDropdown() {
        for (const [code, label] of Object.entries(languages)) {
            const exists = await checkIfLanguageFolderExists(code);
            if (exists) {
                const item = document.createElement("div");
                item.classList.add("dropdown-item");
                item.textContent = label;
                item.addEventListener("click", () => switchLanguage(code));
                languageDropdowns.forEach(dd => dd.appendChild(item.cloneNode(true)));
            }
        }
    }

    function switchLanguage(targetLang) {
        if (targetLang === lang) return;

        let newFolder = (targetLang === "en") ? `/${version}/` : `/${version}_${targetLang}/`;
        let file = window.location.pathname.split("/").pop();
        window.location.href = newFolder + file;
    }

    buildLanguageDropdown();
});
