const versions = [
    { version: 'V1', path: '../V1/DataOperator_V1.1_EN.htm' },
    { version: 'V2', path: '../V2/DataOperator_V1.2_EN.htm' },
    { version: 'V3', path: '../V3/DataOperator_V1.3_EN.htm' },
    { version: 'V4', path: '../V4/DataOperator_V1.4_EN.htm' },
    { version: 'Latest version', path: '../Current/DataOperator_V1.5_EN.htm' }
];

function getCurrentVersion() {
    const currentPath = window.location.pathname;

    // Falls der ursprüngliche Dateiname in der URL enthalten ist
    for (const version of versions) {
        if (currentPath.includes(version.path.replace("..", "/docs"))) {
            return version.version;
        }
    }

    // Falls die URL umgeleitet wurde, nach allgemeinem Muster suchen
    if (currentPath.includes("/docs/Current/Content/Topics/")) {
        return "Latest version";
    } else if (currentPath.includes("/docs/V1/")) {
        return "V1";
    } else if (currentPath.includes("/docs/V2/")) {
        return "V2";
    } else if (currentPath.includes("/docs/V3/")) {
        return "V3";
    } else if (currentPath.includes("/docs/V4/")) {
        return "V4";
    }

    return "Unknown version"; // Falls nichts passt
}

const versionDropdown = document.getElementById('versionDropdown');
const currentVersion = document.getElementById('currentVersion');

// Setze die aktuelle Version im Dropdown
currentVersion.textContent = getCurrentVersion();

// Dropdown-Optionen hinzufügen
versions.forEach(version => {
    const link = document.createElement('a');
    link.href = version.path;
    link.textContent = version.version;
    link.onclick = function() {
        currentVersion.textContent = version.version; // Aktuelle Version aktualisieren
    };
    versionDropdown.appendChild(link);
});
