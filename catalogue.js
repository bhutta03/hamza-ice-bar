const filters = [...document.querySelectorAll('[data-filter]')];
const products = [...document.querySelectorAll('.product-card')];
function filterProducts(brand) {
  filters.forEach(button => {
    const selected = button.dataset.filter === brand;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  let count = 0;
  products.forEach(card => {
    card.hidden = brand !== 'all' && card.dataset.brand !== brand;
    if (!card.hidden) count++;
  });
  document.getElementById('product-count').textContent = `${count} ${count === 1 ? 'ice cream' : 'ice creams'}`;
}
filters.forEach(button => button.addEventListener('click', () => filterProducts(button.dataset.filter)));
document.querySelectorAll('[data-brand-link]').forEach(link => link.addEventListener('click', () => filterProducts(link.dataset.brandLink)));
filterProducts('all');
