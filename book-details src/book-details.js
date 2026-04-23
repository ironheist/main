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
    const breadcrumbTitle = document.getElementById('breadcrumbTitle');
    if (breadcrumbTitle) breadcrumbTitle.textContent = title;
    
    // Update page title and meta tags
    const pageTitle = `${title} | Iron Heist Poetry`;
    const pageDesc = book.intro ? book.intro.replace(/<[^>]+>/g, '').substring(0, 160) : `Explore ${title} by Iron Heist.`;
    const canonicalUrl = `https://ironheist.github.io/main/book-details%20src/book-details.html?title=${encodeURIComponent(title)}`;
    const ogImage = `https://ironheist.github.io/main/${book.imgSrc.replace(/ /g, '%20')}`;

    document.title = pageTitle;
    updateMetaTags(pageTitle, pageDesc, canonicalUrl, ogImage);
    injectBookSchema(title, canonicalUrl, ogImage, pageDesc);
}

// Function to update meta tags
function updateMetaTags(title, description, url, image) {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);

    if (url) {
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', url);
        const canonical = document.getElementById('canonicalLink');
        if (canonical) canonical.setAttribute('href', url);
    }

    if (image) {
        const ogImg = document.querySelector('meta[property="og:image"]');
        if (ogImg) ogImg.setAttribute('content', image);
        const twitterImg = document.querySelector('meta[name="twitter:image"]');
        if (twitterImg) twitterImg.setAttribute('content', image);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', description);
}

// Inject a Book schema JSON-LD for the current book
function injectBookSchema(bookTitle, bookUrl, bookImage, bookDesc) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Book",
        "name": bookTitle,
        "url": bookUrl,
        "image": bookImage,
        "description": bookDesc,
        "author": {
            "@type": "Person",
            "name": "Iron Heist",
            "alternateName": "John Colt",
            "url": "https://ironheist.github.io/main/"
        },
        "inLanguage": "en"
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema, null, 4);
    document.head.appendChild(script);
}

// Function to navigate to PDF viewer
function goToViewer() {
    if (!book || !book.href) {
        alert("Unable to load the book. Please return to the collection and try again.");
        return;
    }
    window.location.href = `../viewer%20src/viewer.html?pdf=${encodeURIComponent(book.href)}&title=${encodeURIComponent(title)}`;
}

// Apply dark mode if previously set
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    const checkbox = document.getElementById('darkModeToggle');
    if (checkbox) checkbox.checked = true;
}
