const books = [
    { 
        title: "Garden of Grief", 
        href: "pdfs/GARDEN OF GRIEF.pdf", 
        imgSrc: "GOG.jpeg", 
        alt: "Garden of Grief - A Collection of Poems by Iron Heist",
        tooltip: "Enter a poet’s tender battlefield, where grief blooms into raw verse, tracing love’s scars, faith’s doubts, and the fragile light of a soul navigating darkness and dawn."
    },
    { 
        title: "A Diary of My Thoughts", 
        href: "pdfs/A Diary of my Thoughts.pdf", 
        imgSrc: "A Diary of my thoughts.jpeg", 
        alt: "A Diary of My Thoughts - Philosophical Poetry by Iron Heist",
        tooltip: "Step into a poet’s soul, where sleepless nights and burning hearts weave an intimate tapestry of love, loss, and the relentless search for light in the dark."
    },
    { 
        title: "Midday Blues", 
        href: "pdfs/Midday Blues.pdf", 
        imgSrc: "Midday Blues.jpeg", 
        alt: "Midday Blues - Emotional Poetry by Iron Heist",
        tooltip: "Delve into a poet’s midday reverie, where love’s quiet ache and faith’s fragile dance unfold in lyrical whispers of hope and renewal."
    },
    { 
        title: "Fading Light?", 
        href: "pdfs/Fading Light.pdf", 
        imgSrc: "Fading Light.jpeg", 
        alt: "Fading Light? - Philosophical Poetry by Iron Heist",
        tooltip: "Embark on a tender descent into dusk, where poems of love and loss flicker like fading light, revealing the beauty and ache of life’s silent struggles."
    },
    { 
        title: "Dawn & Dusk", 
        href: "pdfs/Dawn and Dusk.pdf", 
        imgSrc: "Dawn & Dusk.jpeg", 
        alt: "Dawn & Dusk - Reflective Poetry by Iron Heist",
        tooltip: "Wander through a poet’s twilight, where dawn and dusk collide in verses of growth and grief, unveiling the fractured beauty of a soul caught between shadows and light."
    },
    { 
        title: "A Letdown", 
        href: "pdfs/A Letdown.pdf", 
        imgSrc: "A Letdown.jpeg", 
        alt: "A Letdown - Emotional Poetry by Iron Heist",
        tooltip: "Step into a poet’s unraveling, where love’s steep price fractures the soul into haunting fragments, tracing a path of loss and self-destruction through a winter that never thaws."
    },
    { 
        title: "Drunk Off Her", 
        href: "pdfs/DRUNK OFF HER.pdf", 
        imgSrc: "Drunk OFF her.jpeg", 
        alt: "Drunk Off Her - Romantic Poetry by Iron Heist",
        tooltip: "Drift through a haze of longing, where memories of her linger like a bittersweet intoxicant, binding a poet to a love that burns bright yet slips away like sand through desperate hands."
    },
    { 
        title: "You and the Moon", 
        href: "pdfs/You and the Moon.pdf", 
        imgSrc: "You are my moonlight.jpeg", 
        alt: "You and the Moon - Romantic Poetry by Iron Heist",
        tooltip: "Wander a lover’s celestial reverie, where the moon and tides mirror a heart torn between devotion and distance, whispering vows to a beloved just out of reach."
    },
    { 
        title: "A Fool's Dream", 
        href: "pdfs/A Fool's Dream.pdf", 
        imgSrc: "A Fools Dream.jpeg", 
        alt: "A Fool's Dream - Philosophical Poetry by Iron Heist",
        tooltip: "Plunge into the abyss of a restless mind, where dreams crumble like ash and ghosts of doubt haunt every page, leaving only echoes of what might have been."
    }
];

// Spotify Playlists Data (Add more playlists here as needed)
const playlists = [
    {
        name: "SadBoi Era",
        embedUrl: "https://open.spotify.com/embed/playlist/1pl65GxBYh9MbjPeg5NucI?si=a0a7e98717954fe6"
    },
    {
        name: "My Fav",
        embedUrl: "https://open.spotify.com/embed/playlist/4FYepxrlOEaPT1t6x4R4Vb?si=a600ae9eca074416"
    }
];

// Quotes for Quote of the Day (Updated with quotes from PDFs)
const quotes = [
    { quote: "There will always be a fool within me, Perhaps that's why there's still a dream in me.", source: "A Fool's Dream" },
    { quote: "You're always here in my mind Like a poem I could never write.", source: "A Fool's Dream" },
    { quote: "Darkness is my closest ally. I see no escape from it. Perhaps it is my one and only friend.", source: "A Fool's Dream" },
    { quote: "I look at the moon and I remember you. If you are not perfect, then how do you manage to light me up in my darkest hours?", source: "You and the Moon" },
    { quote: "My love for you is eternal. Come see yourself through my eyes. Have a glimpse at what my universe looks like.", source: "You and the Moon" },
    { quote: "The ocean is a friend of mine, And now I worry about it being an enemy, For keeping me at bay, A long way away, Away from you.", source: "You and the Moon" },
    { quote: "I am engulfed in this darkness. You are my light, and to this pain you are its cure.", source: "Drunk Off Her" },
    { quote: "Dreams connect us. What I dream of is what my mind thinks of my own existence. Maybe that's why I dream of you every night.", source: "Drunk Off Her" },
    { quote: "You were just some sand that I was trying so hard to cling onto. All the best parts of you slipped out.", source: "Drunk Off Her" },
    { quote: "I speak of my grief the way I speak of God—religiously, yet like a friend in need.", source: "Garden of Grief" },
    { quote: "Even if the universe is full of stars, It will still stay dark. And the only thing that can shine brighter than the darkness is you.", source: "Garden of Grief" },
    { quote: "Loss is imminent. It may be my niece, a lover, or a dream that I failed to discover.", source: "Garden of Grief" },
    { quote: "Love is a gamble. It comes with a price. The price you pay when you lose love is losing yourself.", source: "A Letdown" },
    { quote: "You were my summer, My autumn, But now that you have left me cold, I declare you to be my winter.", source: "A Letdown" },
    { quote: "You are the ghost I cannot seem to push away. You are the witch of my so-called 'dream forest.'", source: "A Letdown" }
];

function displayQuoteOfTheDay() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteElement = document.getElementById('quoteOfTheDay');
    quoteElement.innerHTML = `"${randomQuote.quote}"<br><em>— from "${randomQuote.source}"</em>`;
}

function renderBooks() {
    const bookCollection = document.getElementById('bookCollection');
    let html = '';
    books.forEach(book => {
        html += `
<div class="book" data-title="${book.title}" role="article" aria-label="${book.title}" title="${book.tooltip}">
    <a href="book-details.html?title=${encodeURIComponent(book.title)}" target="_blank">
        <img src="${book.imgSrc}" alt="${book.alt}" loading="lazy">
        <p class="book-title">${book.title}</p>
    </a>
</div>
`;
    });
    bookCollection.innerHTML = html;
}

// Render Spotify Playlists
function renderPlaylists() {
    const playlistContainer = document.getElementById('spotifyPlaylists');
    let html = '';
    playlists.forEach(playlist => {
        html += `
<div class="spotify-playlist">
    <iframe style="border-radius:12px" src="${playlist.embedUrl}" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</div>
`;
    });
    playlistContainer.innerHTML = html;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

window.onscroll = function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

function redirectToRandomPoem() {
    const randomBook = books[Math.floor(Math.random() * books.length)];
    window.open(`viewer.html?pdf=${encodeURIComponent(randomBook.href)}&title=${encodeURIComponent(randomBook.title)}`, '_blank');
}

function searchBooks() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const booksElements = document.getElementsByClassName('book');
    let visibleCount = 0;

    for (let i = 0; i < booksElements.length; i++) {
        const title = booksElements[i].getElementsByClassName('book-title')[0];
        const txtValue = title.textContent || title.innerText;
        if (txtValue.toUpperCase().includes(filter)) {
            booksElements[i].style.display = "";
            visibleCount++;
        } else {
            booksElements[i].style.display = "none";
        }
    }

    const bookCollection = document.getElementById('bookCollection');
    if (visibleCount === 0) {
        bookCollection.innerHTML = '<p style="text-align: center; color: #888;">No books found.</p>';
        setTimeout(renderBooks, 2000);
    }
}

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${hours}:${minutes}:${seconds} ${ampm}`;
}

function updateDateTime() {
    const today = new Date();
    const date = today.toDateString();
    const time = formatAMPM(today);
    document.getElementById('date-time').innerHTML = `${date} | ${time}`;
    document.getElementById('current-year').textContent = today.getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
    renderBooks();
    displayQuoteOfTheDay();
    renderPlaylists();
    updateDateTime();
    setInterval(updateDateTime, 1000);
    if (localStorage.getItem('darkMode') === 'true') toggleDarkMode();
});
