const product = JSON.parse(localStorage.getItem('selectedProduct'));

if (product) {
  document.getElementById('productImage').style.backgroundImage = `url('${product.image}')`;
  document.getElementById('productImage').style.backgroundSize = 'cover';
  document.getElementById('productImage').style.backgroundPosition = 'center';
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productPrice').textContent = product.price;
  document.getElementById('productDescription').textContent = product.description;
} else {
  document.querySelector('.product-container').innerHTML = '<p>Product not found. Please go back.</p>';
}

// Load existing cart or start empty
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count display
function updateCartCount() {
  const count = cart.length;
  document.getElementById('cartCount').textContent = count;
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

// Add to cart button
document.getElementById('addToCartBtn').addEventListener('click', () => {
  if (!product) {
    alert('No product to add!');
    return;
  }

  cart.push(product);
  saveCart();

  alert(`${product.name} added to your bag`);
});

// Show/hide cart preview with items
document.getElementById('cartIcon').addEventListener('click', () => {
  const preview = document.getElementById('cartPreview');
  preview.classList.toggle('hidden');

  if (preview.classList.contains('hidden')) return; 

  if (cart.length === 0) {
    preview.innerHTML = `
      <div class="cart-header">
        <button class="close-preview" aria-label="Close cart preview">&#8592;</button>
      </div>
      <p>Your bag is empty.</p>
    `;
    attachCloseListener();
    return;
  }

  preview.innerHTML = `
    <div class="cart-header">
      <button class="close-preview" aria-label="Close cart preview">&#8592;</button>
    </div>
    ${cart.map((item, index) => `
      <div class="cart-item" data-index="${index}">
        <div class="cart-image" style="background-image: url('${item.image}')"></div>
        <div class="cart-info">
          <h4>${item.name}</h4>
          <p>${item.price}</p>
          <p>${item.description}</p>
        </div>
        <button class="delete-item" aria-label="Remove item">×</button>
      </div>
    `).join('')}
    <button id="checkoutBtn">Go to Checkout</button>
  `;
  attachCloseListener();
attachDeleteListeners();


const checkoutBtn = document.getElementById('checkoutBtn');
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', () => {
    window.location.href = 'cart.html'; 
  });
}

  attachCloseListener();
  attachDeleteListeners();
});

// Close button in cart preview
function attachCloseListener() {
  const closeBtn = document.querySelector('.close-preview');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.getElementById('cartPreview').classList.add('hidden');
    });
  }
}

// Delete item 
function attachDeleteListeners() {
  document.querySelectorAll('.delete-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = parseInt(e.target.closest('.cart-item').dataset.index);
      if (!isNaN(index)) {
        cart.splice(index, 1);
        saveCart();
        //  after deletion
        document.getElementById('cartIcon').click();
        document.getElementById('cartIcon').click();
      }
    });
  });
}


updateCartCount();




