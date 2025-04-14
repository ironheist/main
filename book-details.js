function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    const paramValue = urlParams.get(param);
    return paramValue ? decodeURIComponent(paramValue).trim() : null;
}

const title = getQueryParam('title');
const book = books.find(b => b.title.toLowerCase() === (title || '').toLowerCase());

if (!title || !book) {
    document.getElementById('bookTitle').textContent = 'Book Not Found';
    document.getElementById('bookCover').src = 'poetry.png';
    document.getElementById('bookCover').alt = 'Book Not Found';
    document.getElementById('bookIntro').innerHTML = 'Sorry, the requested book could not be found. Please return to the collection.';
} else {
    document.getElementById('bookTitle').textContent = title;
    document.getElementById('bookCover').src = book.imgSrc;
    document.getElementById('bookCover').alt = book.alt;
    document.getElementById('bookIntro').innerHTML = book.intro || 'No introduction available.';
    document.title = `${title} | Iron Heist (John Colt)`;

    // Update Open Graph and Twitter meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `${title} | Iron Heist (John Colt)`);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', book.intro ? book.intro.replace(/<[^>]+>/g, '') : 'Explore poetry by Iron Heist.');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', `${title} | Iron Heist (John Colt)`);
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', book.intro ? book.intro.replace(/<[^>]+>/g, '') : 'Explore poetry by Iron Heist.');
}

function goToViewer() {
    if (!book || !book.href) {
        alert("Unable to load the book. Please return to the collection and try again.");
        return;
    }
    window.location.href = `viewer.html?pdf=${encodeURIComponent(book.href)}&title=${encodeURIComponent(title)}`;
}
