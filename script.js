document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const notice = document.querySelector('[data-storage-notice]');
const dismissButton = document.querySelector('[data-dismiss-storage]');
const storageKey = 'leiora-technical-storage-notice-v1';

if (notice) {
  let dismissed = false;
  try {
    dismissed = window.localStorage.getItem(storageKey) === 'dismissed';
  } catch {
    dismissed = false;
  }
  notice.hidden = dismissed;
}

dismissButton?.addEventListener('click', () => {
  try {
    window.localStorage.setItem(storageKey, 'dismissed');
  } catch {
    // The notice can still be dismissed for the current page view.
  }
  if (notice) notice.hidden = true;
});
