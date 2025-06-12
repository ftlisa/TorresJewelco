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

// attempt 1 

const products = [
    {
      id: "1",
      name: "Gold Link Ring",
      description: "A bold 18k gold link ring designed to stand out.",
      price: "$250",
      image: "img1.jpg",

      metal: "gold"
    },
    {
      id: "2",
      name: "Gold ",
      description: "3 dimond ring with 18k gold.",
      price: "$680",
      image: "img2ring.jpg",
      metal: "gold"
    },
    {
        id: "3",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning center stone.",
        price: "$780",
        image: "img4ring3.jpg",
        metal: "gold"
      },
      {
        id: "4",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring4.jpg",
        metal: "gold"
      },
      {
        id: "4",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring4.jpg",
        metal: "gold"
      },
      {
        id: "5",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring6.jpg",
        metal: "gold"
      },
      {
        id: "6",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4rings6.jpg",
        metal: "gold"
      },  
      {
        id: "7",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring7.jpg",
        metal: "gold"
      },
      {
        id: "8",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring8.jpg",
        metal: "gold"
      },
      {
        id: "9",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring9.jpg",
        metal: "silver"
      },
      {
        id: "10",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring10.jpg",
        metal: "silver"
      },
      {
        id: "11",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring11.jpg",
        metal: "silver"
      },
      
      {
        id: "12",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring12.jpg",
        metal: "silver"
      },
      {
        id: "13",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring13.jpg",
        metal: "silver"
      },
      {
        id: "14",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring14.jpg",
        metal: "silver"
      },
      {
        id: "15",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring15.jpg",
        metal: "silver"
      },
      {
        id: "16",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring16.jpg",
        metal: "silver"
      },
      {
        id: "17",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring17.jpg",
        metal: "silver"
      },
      {
        id: "18",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring18.jpg",
        metal: "silver"
      },
      {
        id: "19",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring20.jpg",
        metal: "silver"
      },
  ];
  const shopAllProducts = [
    {
      id: "101",
      name: "Silver Necklace",
      description: "Elegant silver necklace with pearls.",
      price: "$180",
      image: "necklace1.jpg",
      metal: "silver"
    },
    // Add more shop all products here
  ];
  
  const grid = document.getElementById('productGrid');
const filterDropdown = document.getElementById('metalFilter');
const shopAllGrid = document.getElementById('shopAllProductGrid'); // for all 

function renderProducts(filteredProducts) {
  grid.innerHTML = ""; // Clear items

  filteredProducts.forEach(product => {
    const box = document.createElement('div');
    box.className = 'product-box';

    const imageDiv = document.createElement('div');
    imageDiv.style.backgroundImage = `url('${product.image}')`;
    imageDiv.style.backgroundSize = 'cover';
    imageDiv.style.backgroundPosition = 'center';
    imageDiv.style.width = '100%'; // 🔥 important to make it fill the box
imageDiv.style.height = '200px'; // adjust if you want it taller
    imageDiv.style.borderRadius = '10px 10px 0 0';

    const name = document.createElement('div');
    name.textContent = product.name;
    name.style.fontWeight = 'bold';
    name.style.padding = '0.5rem';

    const price = document.createElement('div');
    price.textContent = product.price;
    price.style.color = 'green';
    price.style.padding = '0 0.5rem 0.5rem';

    box.addEventListener('click', () => {
      localStorage.setItem('selectedProduct', JSON.stringify(product));
      window.location.href = "produts4rings.html";
    });

    box.appendChild(imageDiv);
    box.appendChild(name);
    box.appendChild(price);

    grid.appendChild(box);
  });
}


renderProducts(products);




