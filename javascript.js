const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show'); 
  hamburger.classList.toggle('open');

  // Toggle hamburger ↔ X
  hamburger.innerHTML = hamburger.classList.contains('open') ? '&times;' : '&#9776;';
});

const observers = document.querySelectorAll('.slide-in-left, .slide-in-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.1
  });

  observers.forEach(el => observer.observe(el));

/* for rings */ 
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
  
  const grid = document.getElementById('productGrid');
const filterDropdown = document.getElementById('metalFilter');

function renderProducts(filteredProducts) {
  grid.innerHTML = ""; // Clear items

  filteredProducts.forEach(product => {
    const box = document.createElement('div');
    box.className = 'product-box';

    const imageDiv = document.createElement('div');
    imageDiv.style.backgroundImage = `url('${product.image}')`;
    imageDiv.style.backgroundSize = 'cover';
    imageDiv.style.backgroundPosition = 'center';
    imageDiv.style.height = '200px';
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

// Dropdown filter 
filterDropdown.addEventListener('change', () => {
  const selected = filterDropdown.value;

  if (selected === 'all') {
    renderProducts(products);
  } else {
    const filtered = products.filter(product => product.metal === selected);
    renderProducts(filtered);
  }
});

/*for product page */

document.getElementById('cartIcon').addEventListener('click', () => {
    const preview = document.getElementById('cartPreview');
    preview.classList.toggle('hidden');
  
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  
    if (storedCart.length === 0) {
      preview.innerHTML = "<p>Your bag is empty.</p>";
      return;
    }
  
    // Build preview HTML
    preview.innerHTML = storedCart.map(item => `
      <div class="cart-item">
        <div class="cart-image" style="background-image: url('${item.image}')"></div>
        <div class="cart-info">
          <h4>${item.name}</h4>
          <p>${item.price}</p>
          <p>${item.description}</p>
        </div>
      </div>
    `).join('') + `<button id="checkoutBtn">Go to Checkout</button>`;
  });
  
  // Update bag count in corner
  function updateCartCount() {
    const count = JSON.parse(localStorage.getItem('cart'))?.length || 0;
    document.getElementById('cartCount').textContent = count;
  }
  
  // Call it on load
  updateCartCount();
  
  
  
  
  // Suggested products logic
  