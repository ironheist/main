// Get query parameter function
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    const paramValue = urlParams.get(param);
    return paramValue ? decodeURIComponent(paramValue).trim() : null;
}

// Find the book based on title parameter
const title = getQueryParam('title');
const book = books.find(b => b.title.toLowerCase() === (title || '').toLowerCase());

if (!title || !book) {
    // Book not found handling
    document.getElementById('bookTitle').textContent = 'Book Not Found';
    document.getElementById('bookCover').src = '../png src/1.png';
    document.getElementById('bookCover').alt = 'Book Not Found';
    document.getElementById('bookIntro').innerHTML = `
        <p>Sorry, the requested book could not be found.</p>
        <a href="../index.html" class="back-button">Return to Collection</a>
    `;
    
    // Update meta tags
    document.title = 'Book Not Found | Iron Heist';
    updateMetaTags('Book Not Found', 'The requested book could not be found.');
} else {
    // Populate book details
    document.getElementById('bookTitle').textContent = title;
    document.getElementById('bookCover').src = `../${book.imgSrc}`;
    document.getElementById('bookCover').alt = book.alt;
    document.getElementById('bookIntro').innerHTML = book.intro || '<p>No introduction available.</p>';
    
    // Update page title and meta tags
    document.title = `${title} | Iron Heist`;
    updateMetaTags(`${title} | Iron Heist`, book.intro ? book.intro.replace(/<[^>]+>/g, '').substring(0, 160) : 'Explore poetry by Iron Heist');
}

// Function to update meta tags
function updateMetaTags(title, description) {
    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);
    
    // Update Twitter meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', description);
}

// Function to navigate to PDF viewer
function goToViewer() {
    if (!book || !book.href) {
        alert("Unable to load the book. Please return to the collection and try again.");
        return;
    }
    window.location.href = `../viewer src/viewer.html?pdf=${encodeURIComponent(book.href)}&title=${encodeURIComponent(title)}`;
}

// Apply dark mode if previously set
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    const checkbox = document.getElementById('darkModeToggle');
    if (checkbox) checkbox.checked = true;
}
