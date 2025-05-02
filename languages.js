document.addEventListener('DOMContentLoaded', function () {
    const currentLangEl = document.getElementById('currentLanguage');
    const languageDropdown = document.getElementById('languageDropdown');
    const availableLanguages = ['en', 'de', 'fr'];
    const languageLabels = { en: 'English', de: 'Deutsch', fr: 'Français' };
  
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    const pathParts = path.split('/').filter(Boolean);
  
    // Aktueller Versionsordner: z.B. V1.2, V1.2_de, Current, etc.
    let folderName = pathParts[pathParts.length - 2] || '';
    let baseVersion = folderName.replace(/_de|_fr/, '');
    let isCurrent = folderName.toLowerCase() === 'current';
  
    // Sprache aus Ordner oder Dateiname ableiten
    let currentLang = 'en';
    if (folderName.endsWith('_de') || filename.includes('_DE')) currentLang = 'de';
    else if (folderName.endsWith('_fr') || filename.includes('_FR')) currentLang = 'fr';
  
    currentLangEl.textContent = languageLabels[currentLang];
  
    currentLangEl.addEventListener('click', function () {
      languageDropdown.classList.toggle('show-dropdown');
    });
  
    document.addEventListener('click', function (event) {
      if (!languageDropdown.contains(event.target) && !currentLangEl.contains(event.target)) {
        languageDropdown.classList.remove('show-dropdown');
      }
    });
  
    function getLanguageUrl(lang) {
      const targetLang = lang;
      const targetFolder = isCurrent
        ? 'Current'
        : (targetLang === 'en' ? baseVersion : `${baseVersion}_${targetLang}`);
      
      // Dateiname transformieren
      const langCode = targetLang.toUpperCase();
      const targetFilename = filename
        .replace(/_EN|_DE|_FR/, `_${langCode}`)
        .replace(/(_[A-Z]{2})?\.htm/, `_${langCode}.htm`);
  
      const newPath = `/${pathParts.slice(0, -2).concat([targetFolder, targetFilename]).join('/')}`;
      return newPath;
    }
  
    function addLangOption(lang) {
      const langUrl = getLanguageUrl(lang);
      fetch(langUrl, { method: 'HEAD' })
        .then(res => {
          if (res.ok) {
            const a = document.createElement('a');
            a.textContent = languageLabels[lang];
            a.href = langUrl;
            if (lang === currentLang) a.classList.add('active');
            a.addEventListener('click', function (e) {
              e.preventDefault();
              window.location.href = a.href;
            });
            languageDropdown.appendChild(a);
          }
        })
        .catch(() => {
          // Datei nicht vorhanden -> Sprache nicht anzeigen
        });
    }
  
    availableLanguages.forEach(addLangOption);
  });