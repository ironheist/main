function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return decodeURIComponent(urlParams.get(param));
}

const pdfUrl = getQueryParam('pdf');
const title = getQueryParam('title');
const iframe = document.getElementById('pdfViewer');

document.getElementById('pdfTitle').textContent = title || 'Poetry Viewer';

const absolutePdfUrl = `https://ironheist.github.io/main/${pdfUrl}`;
const viewerUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(absolutePdfUrl)}`;
iframe.src = viewerUrl;

document.querySelector('meta[property="og:title"]').setAttribute('content', title || 'Iron Heist Poetry Viewer');
document.querySelector('meta[name="twitter:title"]').setAttribute('content', title || 'Iron Heist Poetry Viewer');

iframe.onload = () => {
    try {
        document.getElementById('loadingOverlay').style.display = 'none';
        trackRecentlyViewed();
        // Ensure vertical scrolling by default
        const viewerDoc = iframe.contentDocument || iframe.contentWindow.document;
        const viewerContainer = viewerDoc.querySelector('#viewerContainer');
        if (viewerContainer) {
            viewerContainer.style.overflowX = 'hidden';
            viewerContainer.style.overflowY = 'auto';
            viewerContainer.style.whiteSpace = 'normal';
            viewerDoc.querySelectorAll('.page').forEach(page => {
                page.style.display = 'block';
                page.style.margin = '0 auto';
            });
        }
    } catch (error) {
        console.error("Error during iframe load:", error);
        document.getElementById('loadingOverlay').style.display = 'none';
    }
};

iframe.onerror = () => {
    console.error("Error loading iframe with PDF.js viewer.");
    document.getElementById('loadingOverlay').style.display = 'none';
    alert("Failed to load the poem. Please try again later.");
};

document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        event.preventDefault();
    }
});

function sharePoem() {
    const url = window.location.href;
    if (navigator.share) {
        navigator.share({
            title: document.getElementById('pdfTitle').textContent,
            url: url
        }).catch(err => console.error('Share failed:', err));
    } else {
        navigator.clipboard.writeText(url).then(() => {
            alert('Poem URL copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy URL:', err);
            alert('Failed to copy URL. Please copy manually: ' + url);
        });
    }
}

function trackRecentlyViewed() {
    try {
        const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
        const poem = { title, pdfUrl };
        const index = recentlyViewed.findIndex(item => item.pdfUrl === pdfUrl);
        if (index !== -1) recentlyViewed.splice(index, 1);
        recentlyViewed.unshift(poem);
        if (recentlyViewed.length > 5) recentlyViewed.pop();
        localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    } catch (error) {
        console.error("Error tracking recently viewed:", error.message, error.stack);
    }
}

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    const darkModeSlider = document.querySelector('.dark-mode-slider');
    darkModeSlider.setAttribute('aria-checked', isDarkMode.toString());
    localStorage.setItem('darkMode', isDarkMode);
}

function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    const time = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    });
    document.getElementById('currentDateTime').textContent = `${date}, ${time}`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    if (localStorage.getItem('darkMode') === 'true') toggleDarkMode();
    updateDateTime();
    setInterval(updateDateTime, 1000);
});