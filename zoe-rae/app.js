(() => {
  const config = window.ZOE_SITE;
  const isVagaro = value => {
    try { const url = new URL(value); return url.protocol === 'https:' && (url.hostname === 'vagaro.com' || url.hostname.endsWith('.vagaro.com')); } catch { return false; }
  };
  document.querySelector('#year').textContent = new Date().getFullYear();
  const navigation = document.querySelector('#navigation');
  const toggle = document.querySelector('.menu-toggle');
  function closeMenu() { navigation.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  toggle.addEventListener('click', () => { const open = navigation.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); toggle.focus(); } });
  const services = document.querySelector('#services');
  config.services.forEach(service => {
    const article = document.createElement('article'); article.className = 'service';
    const top = document.createElement('div'); top.className = 'service-top';
    const number = document.createElement('span'); number.textContent = service.number;
    const flower = document.createElement('img'); flower.src = 'flower.svg'; flower.alt = '';
    top.append(number, flower); article.append(top);
    [['h3', 'name', ''], ['p', 'tag', 'tag'], ['p', 'description', 'description']].forEach(([tag, field, className]) => { const element = document.createElement(tag); element.className = className; element.textContent = service[field]; article.append(element); });
    const link = document.createElement('a'); link.href = '#booking'; link.className = 'text-link'; link.textContent = 'Explore appointments ↗'; article.append(link); services.append(article);
  });
  if (isVagaro(config.bookingUrl)) document.querySelectorAll('[data-booking]').forEach(link => { link.href = config.bookingUrl; });
  if (config.widgetUrl && isVagaro(config.widgetUrl)) {
    const container = document.querySelector('#booking-widget');
    const iframe = document.createElement('iframe'); iframe.src = config.widgetUrl; iframe.title = 'Book an appointment with Zoe Rae on Vagaro'; iframe.loading = 'lazy'; container.append(iframe); container.hidden = false;
  }
})();
