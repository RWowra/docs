document.addEventListener("DOMContentLoaded", function () {
    const versions = [
        { version: 'V1.1', path: '../V1.1/DataOperator_V1.1_EN.htm' },
        { version: 'V1.2', path: '../V1.2/DataOperator_V1.2_EN.htm' },
        { version: 'V1.3', path: '../V1.3/DataOperator_V1.3_EN.htm' },
        { version: 'V1.4', path: '../V1.4/DataOperator_V1.4_EN.htm' },
        { version: 'Latest version', path: '../Current/DataOperator_V1.5_EN.htm' }
    ];

    const versionDropdown = document.getElementById("versionDropdown");
    const currentVersionSpan = document.getElementById("currentVersion");

    // Aktuelle Version aus URL ableiten
    const currentPath = window.location.pathname;
    const currentVersion = versions.find(v => currentPath.includes(v.path.replace('../', '/')));

    if (currentVersion) {
        currentVersionSpan.textContent = currentVersion.version;
    }

    versions.forEach(version => {
        const item = document.createElement("div");
        item.className = "dropdown-item";
        item.textContent = version.version;
        item.addEventListener("click", () => {
            window.location.href = version.path;
        });
        versionDropdown.appendChild(item);
    });

    // Dropdown öffnen/schließen beim Klick
    currentVersionSpan.addEventListener("click", () => {
        versionDropdown.classList.toggle("show");
    });

    // Schließen bei Klick außerhalb
    document.addEventListener("click", function (e) {
        if (!versionDropdown.contains(e.target) && e.target !== currentVersionSpan) {
            versionDropdown.classList.remove("show");
        }
    });
});
