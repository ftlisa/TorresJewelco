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
      image: "img1.jpg"
    },
    {
      id: "2",
      name: "Gold ",
      description: "3 dimond ring with 18k gold.",
      price: "$680",
      image: "img2ring.jpg"
    },
    {
        id: "3",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning center stone.",
        price: "$780",
        image: "img4ring3.jpg"
      },
      {
        id: "4",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring4.jpg"
      },
      {
        id: "4",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring4.jpg"
      },
      {
        id: "5",
        name: "Diamond Halo Ring",
        description: "Sparkling diamonds surround a stunning oval center stone.",
        price: "$780",
        image: "img4ring6.jpg"
      },
   
  ];
  
  const grid = document.getElementById('productGrid');
  
  products.forEach(product => {
    const box = document.createElement('div');
    box.className = 'product-box';
  
    // image 
    const imageDiv = document.createElement('div');
    imageDiv.style.backgroundImage = `url('${product.image}')`;
    imageDiv.style.backgroundSize = 'cover';
    imageDiv.style.backgroundPosition = 'center';
    imageDiv.style.height = '200px';
    imageDiv.style.borderRadius = '10px 10px 0 0';
  
    // Product name
    const name = document.createElement('div');
    name.textContent = product.name;
    name.style.fontWeight = 'bold';
    name.style.padding = '0.5rem';
  
    // Product price
    const price = document.createElement('div');
    price.textContent = product.price;
    price.style.color = 'green';
    price.style.padding = '0 0.5rem 0.5rem';
  
    // Click 
    box.addEventListener('click', () => {
      localStorage.setItem('selectedProduct', JSON.stringify(product));
      window.location.href = "produts4rings.html";
    });
  
    // formate
    box.appendChild(imageDiv);
    box.appendChild(name);
    box.appendChild(price);
  
    // Add to the grid
    grid.appendChild(box);
  });
  
  