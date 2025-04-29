document.addEventListener("DOMContentLoaded", function () {
    const versions = ["V1.1", "V1.2", "V1.3", "V1.4", "V1.5"]; // hier pflegen
    const versionDropdowns = document.querySelectorAll("#versionDropdown");
    const currentVersionSpans = document.querySelectorAll("#currentVersion");

    const path = window.location.pathname;
    const folderMatch = path.match(/\/(V\d+\.\d+)(?:_([a-z]{2}))?\//);

    let currentVersion = "unknown";
    let currentLang = "en";

    if (folderMatch) {
        currentVersion = folderMatch[1];
        if (folderMatch[2]) {
            currentLang = folderMatch[2];
        }
    }

    currentVersionSpans.forEach(span => {
        span.textContent = currentVersion;
    });

    versions.forEach(version => {
        const item = document.createElement("div");
        item.classList.add("dropdown-item");
        item.textContent = version;
        item.addEventListener("click", () => switchVersion(version));
        versionDropdowns.forEach(dd => dd.appendChild(item.cloneNode(true)));
    });

    function switchVersion(targetVersion) {
        let newFolder = (currentLang === "en") ? `/${targetVersion}/` : `/${targetVersion}_${currentLang}/`;
        let file = window.location.pathname.split("/").pop();
        window.location.href = newFolder + file;
    }
});
