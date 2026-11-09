'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(expanded));
  navigation.classList.toggle('open', expanded);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});

// Values transcribed from Table 1 of the supplied manuscript.
const results = {
  '3b': { backbone: 'Qwen2.5-VL-3B', model: 'Pros4D-3B', observed: [50.9, 63.9], future: [36.0, 58.8], overall: 62.0 },
  '8b': { backbone: 'Qwen3-VL-8B', model: 'Pros4D-8B', observed: [49.7, 64.9], future: [40.7, 59.5], overall: 62.9 }
};
document.querySelectorAll('[data-scale]').forEach(button => {
  button.addEventListener('click', () => {
    const selected = results[button.dataset.scale];
    document.querySelectorAll('[data-scale]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('[data-backbone-name]').forEach(item => { item.textContent = selected.backbone; });
    document.querySelectorAll('[data-model-name]').forEach(item => { item.textContent = selected.model; });
    for (const task of ['observed', 'future']) {
      const [baseline, ours] = selected[task];
      document.getElementById(`${task}-base`).textContent = baseline.toFixed(1);
      document.getElementById(`${task}-ours`).textContent = ours.toFixed(1);
      document.getElementById(`${task}-base-bar`).style.setProperty('--value', `${baseline}%`);
      document.getElementById(`${task}-ours-bar`).style.setProperty('--value', `${ours}%`);
      const gain = document.getElementById(`${task}-gain`);
      gain.replaceChildren(document.createTextNode(`+${(ours - baseline).toFixed(1)}`));
      const unit = document.createElement('span');
      unit.textContent = ' pts';
      gain.append(unit);
    }
    document.getElementById('overall-score').textContent = `${selected.overall.toFixed(1)}%`;
  });
});

const tabs = [...document.querySelectorAll('[role="tab"]')];
function activateTab(tab, focus = false) {
  tabs.forEach(item => {
    const active = item === tab;
    item.setAttribute('aria-selected', String(active));
    item.tabIndex = active ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
  });
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      activateTab(tabs[next], true);
    }
  });
});

const dialog = document.getElementById('figure-dialog');
const dialogImage = document.getElementById('dialog-image');
const dialogCaption = document.getElementById('dialog-caption');
let figureOpener;
document.querySelectorAll('[data-zoom]').forEach(button => {
  button.addEventListener('click', () => {
    figureOpener = button;
    dialogImage.src = button.dataset.zoom;
    dialogImage.alt = button.querySelector('img').alt;
    dialogCaption.textContent = button.dataset.caption;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.style.overflow = '';
  figureOpener?.focus();
});

const copyButton = document.getElementById('copy-citation');
copyButton.addEventListener('click', async () => {
  const citation = document.getElementById('bibtex').textContent.trim();
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(citation);
    } else {
      const field = document.createElement('textarea');
      field.value = citation;
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.append(field);
      field.select();
      const copied = document.execCommand('copy');
      field.remove();
      if (!copied) throw new Error('Clipboard unavailable');
      copyButton.focus();
    }
    copyButton.textContent = 'Copied ✓';
    document.getElementById('copy-status').textContent = 'BibTeX copied to clipboard.';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('bibtex'));
    selection.removeAllRanges();
    selection.addRange(range);
    document.getElementById('copy-status').textContent = 'Citation selected. Use your browser’s copy command or download the BibTeX file.';
    copyButton.textContent = 'Use Ctrl/Cmd+C';
  }
});

if ('IntersectionObserver' in window) {
  const links = [...navigation.querySelectorAll('a[href^="#"]')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  links.forEach(link => {
    const target = document.querySelector(link.hash);
    if (target) observer.observe(target);
  });
}
