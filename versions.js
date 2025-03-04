const versions = [
    { version: 'V1', path: '../V1/Data Operator v1.1/Data Operator_V1.1_User Guide_EN.htm' },
    { version: 'V2', path: '../V2/Data Operator v1.2/Data Operator_V1.2_User Guide_EN.htm' },
    { version: 'V3', path: '../V3/Data Operator v1.3/Data Operator_V1.3_User Guide_EN.htm' },
    { version: 'V4', path: '../V4/Data Operator v1.4/Data Operator_V1.4_User Guide_EN.htm' },
    { version: 'Latest version', path: '../Current/Data Operator v1.5/Data Operator_V1.5_User Guide_EN.htm' }
];

// Funktion zur Ermittlung der aktuellen Version basierend auf der URL
function getCurrentVersion() {
    const currentPath = window.location.pathname; // Aktueller Pfad der URL
    for (const version of versions) {
        if (currentPath.includes(version.path)) {
            return version.version; // Gibt die Version zurück, die im aktuellen Pfad enthalten ist
        }
    }
    return 'Unknown version'; // Fallback, falls keine Version gefunden wird
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