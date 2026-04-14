const products = [
  { id: 1, name: 'Crema', price: 10 },
  { id: 2, name: 'Labial', price: 15 },
  { id: 3, name: 'Serum', price: 20 }
];

let cart = {};

function renderProducts() {
  const grid = document.getElementById('productosGrid');

  grid.innerHTML = products.map(p => `
    <div class="producto">
      <h3>${p.name}</h3>
      <p class="precio">$${p.price}</p>
      <button onclick="addToCart(${p.id})">Agregar</button>
    </div>
  `).join('');
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
}

function renderCart() {
  const container = document.getElementById('carritoItems');
  let total = 0;

  container.innerHTML = '';

  Object.entries(cart).forEach(([id, qty]) => {
    const p = products.find(x => x.id == id);
    total += p.price * qty;

    container.innerHTML += `
      <p>${p.name} x${qty} - $${p.price * qty}</p>
    `;
  });

  document.getElementById('cartTotal').textContent = '$' + total;
}

function pay() {
  alert("Pago simulado exitoso 🌸");
}

renderProducts();