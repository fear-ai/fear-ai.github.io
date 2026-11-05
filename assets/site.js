const menu = document.querySelector('.menu-button');
const navigation = document.querySelector('#navigation');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    menu.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
    menu.focus();
  }
});
const filters = document.querySelectorAll('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => {
    item.classList.toggle('active', item === button);
    item.setAttribute('aria-pressed', String(item === button));
  });
  let count = 0;
  document.querySelectorAll('.source-entry').forEach(entry => {
    const visible = button.dataset.filter === 'all' || entry.dataset.category === button.dataset.filter;
    entry.hidden = !visible;
    if (visible) count++;
  });
  document.querySelector('#source-count').textContent = `${count} ${count === 1 ? 'source' : 'sources'}`;
}));
const scope = {
  total: {value: '950', description: 'Worldwide electricity demand from all data centers in 2030.'},
  ai: {value: '465', description: 'Worldwide electricity demand from AI-focused facilities in 2030, including supporting facility demand.'}
};
function selectScope(button) {
  document.querySelectorAll('[data-scope]').forEach(tab => {
    const selected = tab === button;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  document.querySelector('#scope-number').textContent = scope[button.dataset.scope].value;
  document.querySelector('#scope-description').textContent = scope[button.dataset.scope].description;
  document.querySelector('#scope-panel').setAttribute('aria-labelledby', button.id);
  document.querySelector('.scope-card').classList.toggle('ai-selected', button.dataset.scope === 'ai');
}
const tabs = [...document.querySelectorAll('[data-scope]')];
tabs.forEach((button, i) => {
  button.addEventListener('click', () => selectScope(button));
  button.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (i + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    selectScope(tabs[next]);
    tabs[next].focus();
  });
});
