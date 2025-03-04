const versions = [
    { version: 'V1', path: '../V1/DataOperator_V1.1_EN.htm' },
    { version: 'V2', path: '../V2/DataOperator_V1.2_EN.htm' },
    { version: 'V3', path: '../V3/DataOperator_V1.3_EN.htm' },
    { version: 'V4', path: '../V4/DataOperator_V1.4_EN.htm' },
    { version: 'Latest version', path: '../Current/DataOperator_V1.5_EN.htm' }
];

function getCurrentVersion() {
    const currentPath = window.location.pathname;
    console.log("DEBUG: Current Path =", currentPath);

    // Prüfe zuerst, ob die Hauptdatei direkt in der URL ist
    for (const version of versions) {
        const normalizedPath = version.path.replace("..", "/docs"); // Korrigiere den Pfad
        console.log("Checking against:", normalizedPath);
        if (currentPath.includes(normalizedPath)) {
            console.log("MATCH FOUND:", version.version);
            return version.version;
        }
    }

    // Falls die Seite umgeleitet wurde, prüfe anhand des Ordners (V1, V2, Current, etc.)
    for (const version of versions) {
        const versionFolder = version.path.replace("../", "").split("/")[0]; // Holt "V1", "V2", "Current"
        const folderMatch = `/docs/${versionFolder}/Content/Topics/`;
        console.log("Checking folder match:", folderMatch);
        if (currentPath.includes(folderMatch)) {
            console.log("MATCH FOUND:", version.version);
            return version.version;
        }
    }

    console.log("No match found, returning 'Unknown version'");
    return "Unknown version";
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
