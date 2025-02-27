const versions = [
    { version: 'V1', path: '../V1/COSYM_Online_Help_CSH.htm' },
    { version: 'V2', path: '../V2/COSYM_Online_Help_CSH.htm' },
    { version: 'V3', path: '../V3/COSYM_Online_Help_CSH.htm' },
    { version: 'V4', path: '../V4/COSYM_Online_Help_CSH.htm' },
    { version: 'Latest version', path: '../Current/COSYM_Online_Help_CSH.htm' }
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