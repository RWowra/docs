// ================================================================================
// versions array 
// set the version and path of your documentation 
// version and folder name have to be identical (V1.3.4 → Array: version: 'V1.3.4')
// latest version must have tag "isLatest: true"
// ================================================================================

const versions = [
    { version: 'V1.0', path: '/data-operator/docs/V1.0//Content/Resources/Manual/LandingPage_DataOperator.htm', isLatest: false },
    { version: 'V1.1', path: '/data-operator/docs/V1.1//Content/Resources/Manual/LandingPage_DataOperator.htm', isLatest: false },
    { version: 'V1.2', path: '/data-operator/docs/V1.2/Content/Resources/Manual/LandingPage_DataOperator.htm', isLatest: true }, // Latest version (isLatest: true)
];

// ============================
// NO EDITING ABOVE THIS POINT!
//=============================

// ===============================
// function to get current version
// ===============================

function getCurrentVersion() {
    const currentPath = window.location.pathname; // gets current path (url)
    console.log("DEBUG: Current Path =", currentPath); // for testing in the console

    // 1. try: match with version.path
    for (const version of versions) {
        if (currentPath.includes(version.path)) {
            console.log("MATCH FOUND (exact path):", version.version);
            return version.version;
        }
    }

    // 2. try: gets version number after /docs/
    const parts = currentPath.split("/");
    const docsIndex = parts.indexOf("docs");
    const versionFolder = docsIndex !== -1 ? parts[docsIndex + 1] : null;

    if (versionFolder) {
        console.log("Detected version folder:", versionFolder);

        if (versionFolder === "Current") {
            const latest = versions.find(v => v.isLatest);
            if (latest) {
                console.log("MATCH FOUND (Current alias):", latest.version);
                return formatLatestVersion(latest.version);
            }
        }
        
        for (const version of versions) {
            if (version.path.includes(`/docs/${versionFolder}/`)) {
                console.log("MATCH FOUND (folder only):", version.version);
                return formatLatestVersion(version.version);
            }
        }
    }

    // not match found
    console.log("No match found, returning 'Unknown version'");
    return "Unknown version";
}

// ============================================
// funtion to display version number + (Latest)
// ============================================

function formatLatestVersion(versionName) {
    const version = versions.find(v => v.version === versionName);
    if (version && version.isLatest) {
        return `${versionName} (Latest)`;
    }
    return versionName;
}

// =========
// drop-down
// =========

document.addEventListener("DOMContentLoaded", function () {
    const versionDropdown1 = document.getElementById("versionDropdown1");
    const currentVersion1 = document.getElementById("currentVersion1");
    initDropdown(currentVersion1, versionDropdown1);

    const versionDropdown2 = document.getElementById("versionDropdown2");
    const currentVersion2 = document.getElementById("currentVersion2");
    initDropdown(currentVersion2, versionDropdown2);
});

function initDropdown(currentVersion, versionDropdown) {
    if (currentVersion) {
        currentVersion.textContent = getCurrentVersion();

        currentVersion.addEventListener("click", function () {
            versionDropdown.classList.toggle("show-dropdown");
        });
    }

    if (versionDropdown) {
        versions.forEach(version => {
            const link = document.createElement("a");
            link.href = "#";
            link.textContent = version.isLatest ? `${version.version} (Latest)` : version.version;

            link.onclick = function (e) {
                e.preventDefault();

                const currentPath = window.location.pathname;
                const parts = currentPath.split("/");
                const docsIndex = parts.indexOf("docs");
                const currentVersionFolder = docsIndex !== -1 ? parts[docsIndex + 1] : null;

                const targetParts = version.path.split("/");
                const targetDocsIndex = targetParts.indexOf("docs");
                const targetVersionFolder = targetDocsIndex !== -1 ? targetParts[targetDocsIndex + 1] : null;

                let newPath;
                if (currentVersionFolder && targetVersionFolder) {
                    parts[docsIndex + 1] = targetVersionFolder;
                    newPath = parts.join("/");
                } else {
                    window.location.pathname = version.path;
                    return;
                }
               
                fetch(newPath, { method: 'HEAD' }).then(res => {
                    if (res.ok) {
                        window.location.pathname = newPath;
                    } else {
                        window.location.pathname = version.path;
                    }
                }).catch(() => {
                    window.location.pathname = version.path;
                });
            };

            versionDropdown.appendChild(link);
        });
    }



    // close the dropdown when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!currentVersion.contains(event.target) && !versionDropdown.contains(event.target)) {
            versionDropdown.classList.remove("show-dropdown");
        }
    });
}
