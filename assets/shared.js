// Barre de maquette commune : indique où l'on est et permet de passer à la suite.
(function () {
  const order = [['1-heritage', 'Héritage'], ['2-reference', 'Référence'], ['3-atelier', 'Atelier'], ['4-vitrine', 'Vitrine'], ['5-direct', 'Direct'], ['6-plan', 'Le Plan'], ['7-industrie', 'Industrie'], ['8-maison', 'La Maison']];
  const cur = location.pathname.split('/').filter(Boolean).pop().replace('.html', '');
  const i = order.findIndex(o => o[0] === cur);
  const bar = document.createElement('nav');
  bar.className = 'proto-bar';
  bar.setAttribute('aria-label', 'Navigation entre les maquettes');
  const next = order[(i + 1) % order.length];
  bar.innerHTML = `<a href="index.html">Toutes les propositions</a><span>Maquette ${i + 1} sur ${order.length}</span><a href="${next[0]}.html">Voir ${next[1]}</a><a class="pick" href="questionnaire.html?idee=${i + 1}">Je préfère celle-ci</a>`;
  const css = document.createElement('style');
  css.textContent = `.proto-bar{position:fixed;z-index:50;left:50%;bottom:14px;transform:translateX(-50%);display:flex;align-items:center;gap:4px;padding:5px;background:#fff;color:#111;border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,.28);font:500 14px/1.2 system-ui,-apple-system,"Segoe UI",sans-serif;white-space:nowrap;max-width:calc(100vw - 16px)}
.proto-bar a{color:inherit;text-decoration:none;padding:10px 12px;border-radius:8px;min-height:24px}.proto-bar a:hover{background:#eee}.proto-bar span{padding:0 10px;color:#555}
.proto-bar .pick{background:#111;color:#fff}.proto-bar .pick:hover{background:#333}
@media(max-width:760px){.proto-bar span,.proto-bar a:first-child{display:none}.proto-bar{font-size:13px}}`;
  document.head.appendChild(css); document.body.appendChild(bar);
  // Sélecteur de langue et formulaires : démonstration seulement
  const toast = document.createElement('div');
  toast.setAttribute('role', 'status');
  toast.style.cssText = 'position:fixed;z-index:51;left:50%;bottom:76px;transform:translateX(-50%);background:#111;color:#fff;padding:12px 16px;border-radius:10px;font:500 15px system-ui,sans-serif;opacity:0;transition:opacity .2s;pointer-events:none;max-width:calc(100vw - 32px);text-align:center';
  document.body.appendChild(toast);
  window.demoToast = m => { toast.textContent = m; toast.style.opacity = 1; clearTimeout(toast._t); toast._t = setTimeout(() => toast.style.opacity = 0, 2800); };
  document.querySelectorAll('[data-lang]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); demoToast('Sur le vrai site, ce bouton affichera la page en ' + a.dataset.lang + '.'); }));
  document.querySelectorAll('form[data-demo]').forEach(f => f.addEventListener('submit', e => { e.preventDefault(); demoToast('Ceci est une maquette : rien n\'a été envoyé.'); }));
  document.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); demoToast('Cette page sera créée sur le vrai site.'); }));
})();
