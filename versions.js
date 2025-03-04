const versions = [
    { version: 'V1', path: '../V1/DataOperator_V1.1_EN.htm' },
    { version: 'V2', path: '../V2/DataOperator_V1.2_EN.htm' },
    { version: 'V3', path: '../V3/DataOperator_V1.3_EN.htm' },
    { version: 'V4', path: '../V4/DataOperator_V1.4_EN.htm' },
    { version: 'Latest version', path: '../Current/DataOperator_V1.5_EN.htm' }
];

function getCurrentVersion() {
    const currentPath = window.location.pathname;

    // Prüfe zuerst nach der ursprünglichen Datei (direkte Treffer)
    for (const version of versions) {
        if (currentPath.includes(version.path.replace("..", "/docs"))) {
            return version.version;
        }
    }

    // Falls umgeleitet wurde, prüfe nach allgemeinem Muster und bestimme Version aus `versions`
    for (const version of versions) {
        const versionFolder = version.path.replace("../", "").split("/")[0]; // Holt "V1", "V2", etc.
        if (currentPath.includes(`/docs/${versionFolder}/`)) {
            return version.version; // Gibt z. B. "V1" zurück
        }
    }

    return "Unknown version"; // Falls nichts passt
}

document.addEventListener("DOMContentLoaded", function () {
    const versionDropdown = document.getElementById("versionDropdown");
    const currentVersion = document.getElementById("currentVersion");

    if (currentVersion) {
        currentVersion.textContent = getCurrentVersion(); // Setze die aktuelle Version im Footer
    }

    if (versionDropdown) {
        versions.forEach(version => {
            const link = document.createElement("a");
            link.href = version.path.replace("..", "/docs"); // Korrigierter Pfad für GitHub Pages
            link.textContent = version.version;

            link.onclick = function () {
                if (currentVersion) {
                    currentVersion.textContent = version.version; // Aktualisieren der Version im Footer
                }
            };

            versionDropdown.appendChild(link);
        });
    }
});
