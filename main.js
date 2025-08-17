document.getElementById('year').textContent = new Date().getFullYear();
const statusEl = document.getElementById('status');
document.getElementById('cta').addEventListener('click', () => alert('👋 Hi! Replace this template with your site.'));
document.getElementById('send').addEventListener('click', () => {
  const email = /** @type {HTMLInputElement} */(document.getElementById('email')).value.trim();
  const message = /** @type {HTMLTextAreaElement} */(document.getElementById('message')).value.trim();
  if (!email || !message) { statusEl.textContent = 'Please fill in both fields.'; return; }
  statusEl.textContent = 'Form demo only. Hook this to your backend or service.';
});
