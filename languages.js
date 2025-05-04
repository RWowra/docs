
// Supported languages
const languages = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' }
];

// Get current path and parse version and language
function getCurrentContext() {
  const path = window.location.pathname;

  const match = path.match(/\/(V[\d.]+|current)(_([a-z]{2}))?/i);
  if (!match) return { version: 'current', lang: 'en', rest: path };

  const version = match[1];
  const lang = match[3] || 'en';
  const rest = path.split(match[0])[1] || '';
  return { version, lang, rest };
}

// Construct new path for selected language
function buildPath(version, lang, rest) {
  const langSuffix = lang === 'en' ? '' : `_${lang}`;
  return `/${version}${langSuffix}/${rest}`;
}

// Add the language dropdown to the footer
function createLanguageDropdown() {
  const { version, lang: currentLang, rest } = getCurrentContext();

  const select = document.createElement('select');
  select.id = 'languageSwitcher';
  select.style.marginLeft = '1rem';

  languages.forEach(({ code, label }) => {
    const option = document.createElement('option');
    option.value = code;
    option.text = label;
    if (code === currentLang) option.selected = true;
    select.appendChild(option);
  });

  select.addEventListener('change', () => {
    const selectedLang = select.value;
    const newPath = buildPath(version, selectedLang, rest);

    // Check if the new path exists, else fallback to English
    fetch(newPath, { method: 'HEAD' }).then((res) => {
      if (res.ok) {
        window.location.pathname = newPath;
      } else {
        window.location.pathname = buildPath(version, 'en', rest);
      }
    });
  });

  const footer = document.querySelector('footer') || document.body;
  footer.appendChild(select);
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', createLanguageDropdown);
