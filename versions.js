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

    // Prüfe zuerst nach der ursprünglichen Datei (direkte Treffer)
    for (const version of versions) {
        const normalizedPath = version.path.replace("..", "/docs");
        console.log("Checking against:", normalizedPath);
        if (currentPath.includes(normalizedPath)) {
            console.log("MATCH FOUND:", version.version);
            return version.version;
        }
    }

    // Falls umgeleitet wurde, prüfe nach allgemeinem Muster
    for (const version of versions) {
        const versionFolder = version.path.replace("../", "").split("/")[0]; // Holt "V1", "V2", "Current"
        const folderMatch = `/docs/${versionFolder}/`;
        console.log("Checking folder match:", folderMatch);
        if (currentPath.includes(folderMatch)) {
            console.log("MATCH FOUND:", version.version);
            return formatLatestVersion(version.version);
        }
    }

    console.log("No match found, returning 'Unknown version'");
    return "Unknown version";
}

function formatLatestVersion(version) {
    if (version === "Latest version") {
        const latest = versions.find(v => v.version.includes("Latest"));
        if (latest) {
            const match = latest.path.match(/V\d+\.\d+/); // Holt die Versionsnummer aus dem Dateinamen
            if (match) {
                return `Latest version (${match[0]})`; // Ausgabe: "Latest version (V1.5)"
            }
        }
    }
    return version;
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
