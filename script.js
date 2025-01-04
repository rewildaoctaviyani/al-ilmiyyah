// Function to handle adding book to cart
function addToCart(bookName) {
    alert(`${bookName} telah ditambahkan ke keranjang!`);
}

// Add event listener to "Tambah ke Keranjang" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const bookName = this.getAttribute('data-book-name');

        // Adding class to animate button when clicked
        this.classList.add('added');

        // Call the add to cart function
        addToCart(bookName);

        // Remove the added class after animation
        setTimeout(() => {
            this.classList.remove('added');
        }, 300);
    });
});

// Insert carousel images dynamically
const carouselImages = [
    { imgSrc: 'awal1.jfif', title: 'Featured Book 1', description: 'Description of the featured book.' },
    { imgSrc: 'awal2.jfif', title: 'Featured Book 2', description: 'Description of the featured book.' },
    { imgSrc: 'awal3.jfif', title: 'Featured Book 3', description: 'Description of the featured book.' }
];

const carousel = document.getElementById('home'); // Assuming the carousel is in the home section
const carouselInner = carousel.querySelector('.carousel-inner');
carouselImages.forEach((item, index) => {
    carouselInner.innerHTML += `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${item.imgSrc}" class="d-block w-100" alt="${item.title}">
            <div class="carousel-caption d-none d-md-block">
                <h5>${item.title}</h5>
                <p>${item.description}</p>
            </div>
        </div>
    `;
});

// Display books dynamically in Bestseller section
const books = [
    { title: 'MATAN RENGGANG WASHIYATUL MUSTHOFA', author: 'Author 1', price: 4200, img: 'tr1.webp' },
    { title: 'AL ASYBAH WANADZOIR', author: 'Author 2', price: 270000, img: 'tr2.webp' },
    { title: 'MATAN SULLAM MUNAWARROQ', author: 'Author 3', price: 2160, img: 'tr3.webp' },
    { title: 'MATAN SAFINAH SAFINATUN NAJAH', author: 'Author 4', price: 2550, img: 'tr4.webp' }
];

const bestsellerBooks = document.getElementById('bestseller-books');
books.forEach(book => {
    bestsellerBooks.innerHTML += `
        <div class="col-md-3">
            <div class="card">
                <img src="${book.img}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Penulis: ${book.author}</p>
                    <p class="card-text">Harga: Rp ${book.price.toLocaleString()}</p>
                    <button class="btn add-to-cart" data-book-name="${book.title}">Tambah ke Keranjang</button>
                </div>
            </div>
        </div>
    `;
});

// Function to add item to cart and save in localStorage
function addToCartWithRedirect(title, price) {
    // Retrieve cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Add new item to the cart
    cartItems.push({ title, price });

    // Save back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Redirect user to cart page
    window.location.href = 'keranjang.html';
}

// Filter books by category
document.getElementById('category').addEventListener('change', function () {
    const selectedCategory = this.value;
    const books = document.querySelectorAll('.book');

    books.forEach(book => {
        if (selectedCategory === 'all' || book.classList.contains(selectedCategory)) {
            book.classList.remove('hidden');
        } else {
            book.classList.add('hidden');
        }
    });
});

// Redirect to other applications (e.g., WhatsApp)
function redirectToApp(bookName) {
    const message = `Halo, saya ingin membeli ${bookName}.`;
 const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Script to Add Animation on Button Click
document.querySelectorAll('.btn-custom').forEach((button) => {
    button.addEventListener('click', () => {
        button.innerHTML = 'Loading...';
        setTimeout(() => {
            button.innerHTML = 'BELI';
            alert('Buku berhasil ditambahkan ke keranjang!');
        }, 1000); // Simulate a 1-second delay
    });
});

// Filter Functionality
function filterBooks(category) {
    const books = document.querySelectorAll('.row .col-md-3');
    books.forEach((book) => {
        if (category === 'all' || book.textContent.toLowerCase().includes(category.toLowerCase())) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
}

// Ensure the category filter works with the correct class names
document.getElementById('category').addEventListener('change', function () {
    const selectedCategory = this.value;
    const books = document.querySelectorAll('.col-md-3');

    books.forEach(book => {
        if (selectedCategory === 'all' || book.classList.contains(selectedCategory)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});

const books = [
    "Matan Renggang",
    "Panduan Lengkap HTML & CSS",
    "Belajar Python untuk Pemula",
    "Rahasia Sukses Bisnis Online",
    "Pengantar Machine Learning"
];

// Event listener untuk tombol cari
document.getElementById("search-button").addEventListener("click", function () {
    const keyword = document.getElementById("search-input").value.toLowerCase();
    const results = books.filter(book => book.toLowerCase().includes(keyword));

    // Tampilkan hasil pencarian
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Kosongkan hasil sebelumnya
    if (results.length > 0) {
        results.forEach(book => {
            const item = document.createElement("div");
            item.textContent = book;
            resultsDiv.appendChild(item);
        });
    } else {
        resultsDiv.textContent = "Tidak ada buku yang ditemukan.";
    }
});