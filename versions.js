document.addEventListener("DOMContentLoaded", function () {
    const versions = ["V1.1", "V1.2", "V1.3", "V1.4"];
    const versionDropdowns = document.querySelectorAll("#versionDropdown");
    const currentVersionSpans = document.querySelectorAll("#currentVersion");

    const urlPath = window.location.pathname;
    const versionMatch = urlPath.match(/\/(V\d+\.\d+)(_de|_fr)?\//);
    const currentVersion = versionMatch ? versionMatch[1] : null;

    currentVersionSpans.forEach(span => {
        span.textContent = currentVersion || "Unknown";
    });

    versions.forEach(version => {
        const versionLink = document.createElement("div");
        versionLink.classList.add("dropdown-item");
        versionLink.textContent = version;
        versionLink.addEventListener("click", function () {
            switchVersion(version);
        });

        versionDropdowns.forEach(dropdown => {
            dropdown.appendChild(versionLink.cloneNode(true));
        });
    });

    function switchVersion(targetVersion) {
        const langSuffix = urlPath.includes("_de/") ? "_de"
                        : urlPath.includes("_fr/") ? "_fr"
                        : "";
        const folder = targetVersion + langSuffix;
        const newPath = urlPath.replace(/\/V\d+\.\d+(_de|_fr)?\//, `/${folder}/`);
        window.location.href = newPath;
    }
});
