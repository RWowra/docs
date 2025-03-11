// versions array
const versions = [
    { version: 'V1.1', path: '../V1.1/DataOperator_V1.1_EN.htm' },
    { version: 'V1.2', path: '../V1.2/DataOperator_V1.2_EN.htm' },
    { version: 'V1.3', path: '../V1.3/DataOperator_V1.3_EN.htm' },
    { version: 'V1.4', path: '../V1.4/DataOperator_V1.4_EN.htm' },
    { version: 'Latest version', path: '../Current/DataOperator_V1.5_EN.htm' }
];

//function to get current version
function getCurrentVersion() {
    const currentPath = window.location.pathname;
    console.log("DEBUG: Current Path =", currentPath);

    // checks if current path contains one of the safed versions
    for (const version of versions) {
        const normalizedPath = version.path.replace("..", "/docs");
        console.log("Checking against:", normalizedPath);
        if (currentPath.includes(normalizedPath)) {
            console.log("MATCH FOUND:", version.version);
            return version.version;
        }
    }

    // if redirected, check according to general pattern
    for (const version of versions) {
        const versionFolder = version.path.replace("../", "").split("/")[0]; 
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
            const match = latest.path.match(/V\d+\.\d+/); // gets the version number from the file name
            if (match) {
                return `Latest version (${match[0]})`; // output: "Latest version (Vx.x)"
            }
        }
    }
    return version;
}


// drop-down
document.addEventListener("DOMContentLoaded", function () {
    const versionDropdown = document.getElementById("versionDropdown");
    const currentVersion = document.getElementById("currentVersion");

    if (currentVersion) {
        currentVersion.textContent = getCurrentVersion();
        
        
        currentVersion.addEventListener("click", function () {
            versionDropdown.classList.toggle("show-dropdown");
        });
    }

    if (versionDropdown) {
        versions.forEach(version => {
            const link = document.createElement("a");
            link.href = version.path.replace("..", "/docs");
            link.textContent = version.version;

            link.onclick = function () {
                if (currentVersion) {
                    currentVersion.textContent = version.version;
                }
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
});
