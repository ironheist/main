// Array of books with their details
const books = [
    { 
        title: "Garden of Grief", 
        href: "pdfs/GARDEN OF GRIEF.pdf", 
        imgSrc: "webp src/GOG.webp", 
        alt: "Garden of Grief - A Collection of Poems by Iron Heist",
        tooltip: "Enter a poet's tender battlefield, where grief blooms into raw verse, tracing love's scars, faith's doubts, and the fragile light of a soul navigating darkness and dawn.",
        intro: "Grief is not a fleeting emotion; it lingers, shapes, and transforms us in ways we often fail to comprehend. Garden of Grief is not just a collection of poems—it is a quiet confession, an attempt to put into words the weight of sorrow, the echoes of love lost, and the search for meaning in suffering.<br><br>Each poem in this book is a piece of something I have lived through. They are remnants of nights spent overthinking, of days where silence spoke louder than words, of memories that refused to fade. These pages hold the ache of longing, the rage of betrayal, and the quiet realization that grief is, in its own way, a form of love that never found its place to rest.<br><br>This collection is divided into four parts:<br><br>A Diary of My Thoughts – A raw, unfiltered descent into love, heartbreak, and the turmoil of emotions left unspoken.<br><br>Midday Blues – A reflection on faith, identity, and the realization that not all wounds can be healed.<br><br>Fading Light? – The quiet acceptance of loss, the soft unraveling of love, and the inevitable passage of time.<br><br>Dawn & Dusk – A philosophical reckoning with existence, grief, and the duality of hope and despair.<br><br>This book is not meant to provide answers. It is meant to be read by those who have felt the same weight of emotions, by those who understand what it means to carry grief like a second skin. If you have ever loved and lost, if you have ever questioned the meaning of faith, if you have ever found comfort in sadness—then this book is for you.<br><br>These words exist as a testament that I was here, that I felt, and that I refused to let grief define me, even as it shaped me."
    },
    { 
        title: "A Diary of My Thoughts", 
        href: "pdfs/A Diary of my Thoughts.pdf", 
        imgSrc: "webp src/A Diary of my thoughts.webp", 
        alt: "A Diary of My Thoughts - Philosophical Poetry by Iron Heist",
        tooltip: "Step into a poet's soul, where sleepless nights and burning hearts weave an intimate tapestry of love, loss, and the relentless search for light in the dark.",
        intro: "The mind is a restless sea, its waves crashing with <b>love</b>, <b>loss</b>, and the echoes of what might have been. <b>A Diary of My Thoughts</b> is not just a collection of poems—it is an intimate unraveling of a soul's inner tides, a raw chronicle of nights spent wrestling with longing and days haunted by hollow silence.<br><br>Each entry here is a confession scratched into the dark, penned in the sleepless hours when memories burn brightest. They speak of a heart tethered to another, of a life teetering between vitality and despair, and of words that serve as both lifeline and lament. This collection captures the masochistic pull of love, the weight of unshared pain, and the fragile hope of being remembered.<br><br><b>A Diary of My Thoughts</b> explores the depths of introspection, the sting of nostalgia, and the quiet rebellion against an ending that feels inevitable. It is for those who have lain awake with their own ghosts, who have poured their grief into ink, and who have found solace in the act of naming their shadows.<br><br>These pages are not a cure. They are a mirror for the sleepless, a diary for those who feel too much and fear they'll fade unnoticed."
    },
    { 
        title: "Midday Blues", 
        href: "pdfs/Midday Blues.pdf", 
        imgSrc: "webp src/Midday Blues.webp", 
        alt: "Midday Blues - Emotional Poetry by Iron Heist",
        tooltip: "Delve into a poet's midday reverie, where love's quiet ache and faith's fragile dance unfold in lyrical whispers of hope and renewal.",
        intro: "Grief, love, and the search for self are not fleeting moments—they are threads woven into the fabric of our existence, tugging at us when we least expect it. <b>Midday Blues</b> is not just a collection of poems—it is a quiet unraveling of the heart, a lyrical confession of longing, doubt, and the fragile dance between <b>hope</b> and <b>despair</b>.<br><br>Each poem here is a fragment of a soul laid bare. They are born from restless nights chasing memories, from days questioning faith, and from the ache of a love that lingers like an uninvited guest. This collection grapples with the weight of unreciprocated words, the erosion of identity, and the seasons of life that shift beneath our feet—sometimes offering solace, sometimes leaving us stranded.<br><br><b>Midday Blues</b> explores themes of love's quiet destruction, the illusion of freedom, and the poet's wrestle with faith and forgiveness. These pages are for those who have felt the sting of silence, who have sought meaning in the chaos of their own emotions, and who have found poetry in the ruins of what once was.<br><br>This is not a book of resolution. It is a companion for those who carry their blues into the midday light, searching for a muse that may never return."
    },
    { 
        title: "Fading Light?", 
        href: "pdfs/Fading Light.pdf", 
        imgSrc: "webp src/Fading Light.webp", 
        alt: "Fading Light? - Philosophical Poetry by Iron Heist",
        tooltip: "Embark on a tender descent into dusk, where poems of love and loss flicker like fading light, revealing the beauty and ache of life's silent struggles.",
        intro: "Love is a flame that warms, then consumes, leaving only embers to sift through in the dark. <b>Fading Light?</b> is not just a collection of poems—it is a tender descent into the twilight of connection, a lyrical elegy for what was, what might have been, and what lingers in the <b>silence</b>.<br><br>Each poem here is a pulse of raw emotion, tracing the arc of love's fragile beauty and its inevitable decay. From the desperate longing of unanswered letters to the quiet torment of memories that refuse to fade, these verses capture the ache of a heart stretched thin by absence. They are written in the haze of smoke and starlight, in the wreckage of dreams, and in the fleeting warmth of a touch that no longer exists.<br><br><b>Fading Light?</b> explores the duality of vulnerability and resilience, the weight of grief, and the haunting permanence of love lost to time. This collection is for those who have stared into the void of another's absence, who have sought solace in the ashes of their own words, and who have felt the slow dimming of a once-bright bond.<br><br>These pages don't promise dawn. They are a mirror to the dusk within us all, a quiet companion for when the light fades and the heart still beats."
    },
    { 
        title: "Dawn & Dusk", 
        href: "pdfs/Dawn and Dusk.pdf", 
        imgSrc: "webp src/Dawn & Dusk.webp", 
        alt: "Dawn & Dusk - Reflective Poetry by Iron Heist",
        tooltip: "Wander through a poet's twilight, where dawn and dusk collide in verses of growth and grief, unveiling the fractured beauty of a soul caught between shadows and light.",
        intro: "Life is a dance between shadow and shimmer, a fragile balance of beginnings and endings. <b>Dawn & Dusk</b> is not merely a collection of poems—it is a poetic pilgrimage through the contrasts that define us, a meditation on the <b>beauty</b> and <b>burden</b> of existence.<br><br>Each verse here is a fragment of the human soul, pieced together from moments of growth, grief, and the special spaces in between. They are born from the green of lost summers, the stillness of frozen rivers, and the weight of memories that linger like uninvited guests. This collection wrestles with the duality of love and hate, the curse of longing, and the faint hope that flickers even in the darkest night.<br><br><b>Dawn & Dusk</b> delves into the complexities of overthinking, the permanence of loss, and the search for light amid life's fractured mosaics. It is for those who have felt the chill of winter's reign, who have questioned the mercy of gods, and who have sought meaning in the ruins of what once shone.<br><br>This book offers no easy answers. It is a refuge for those navigating the twilight hours, where dawn feels distant and dusk is all too near."
    },
    { 
        title: "A Letdown", 
        href: "pdfs/A Letdown.pdf", 
        imgSrc: "webp src/A Letdown.webp", 
        alt: "A Letdown - Emotional Poetry by Iron Heist",
        tooltip: "Step into a poet's unraveling, where love's steep price fractures the soul into haunting fragments, tracing a path of loss and self-destruction through a winter that never thaws.",
        intro: "Love is a gamble with stakes we rarely understand until it's too late. <b>A Letdown</b> is not merely a collection of poems—it is a raw excavation of the cost of loving, a meditation on the fragments left behind when the heart breaks and the self <b>dissolves</b>.<br><br>Each verse here is a shard of something shattered—moments of vulnerability, illusions of a perfect future, and the cold reality of loss. Written in the shadow of heartbreak, these poems trace the descent from summer's warmth to winter's chill, capturing the pain of a love that consumes more than it gives. They are the echoes of a mind turned against itself, a soul grappling with the wreckage of what could have been.<br><br><b>A Letdown</b> delves into the price of devotion, the haunting presence of memory, and the quiet resignation of a future unseen. This book is for those who have paid love's toll, who have felt the sting of betrayal or abandonment, and who have wondered if they'll ever reclaim the pieces of themselves lost along the way.<br><br>These words stand as proof of survival—not triumph, but the persistence to feel, even when it hurts."
    },
    { 
        title: "Drunk Off Her", 
        href: "pdfs/DRUNK OFF HER.pdf", 
        imgSrc: "webp src/Drunk OFF her.webp", 
        alt: "Drunk Off Her - Romantic Poetry by Iron Heist",
        tooltip: "Drift through a haze of longing, where memories of her linger like a bittersweet intoxicant, binding a poet to a love that burns bright yet slips away like sand through desperate hands.",
        intro: "Love can intoxicate, consume, and leave us staggering through its aftermath. <b>Drunk Off Her</b> is not just a collection of poems—it is an emotional odyssey, a descent into the <b>euphoria</b> and <b>agony</b> of a love that lingers like a hangover, refusing to let go.<br><br>Each poem here is a pulse of memory, a cry of longing, and a reckoning with the ghosts of a past that won't fade. They are written in the haze of heartbreak, in the clarity of dreams, and in the quiet of a mind searching for itself amid the ruins of another. This collection captures the thrill of love's highs, the sting of its betrayals, and the slow crawl toward healing—or perhaps, toward forgetting.<br><br><b>Drunk Off Her</b> explores the complexity of attachment, the blur between reality and illusion, and the struggle to release a lover who has become both muse and nemesis. It is for those who have been drunk on someone, who have lost themselves in the pursuit, and who have questioned whether love is salvation or a sentence.<br><br>These pages don't offer escape. They are a mirror for those brave enough to face the intoxication of their own hearts."
    },
    { 
        title: "You and the Moon", 
        href: "pdfs/You and the Moon.pdf", 
        imgSrc: "webp src/You are my moonlight.webp", 
        alt: "You and the Moon - Romantic Poetry by Iron Heist",
        tooltip: "Wander a lover's celestial reverie, where the moon and tides mirror a heart torn between devotion and distance, whispering vows to a beloved just out of reach.",
        intro: "Love across distance is a quiet ache, a light that flickers but never fully fades. <b>You and the Moon</b> is not just a collection of poems and thoughts—it is a tender offering, a series of letters written to a beloved who exists beyond reach, a testament to the enduring power of <b>love</b>.<br><br>Each piece here is a whisper from the heart, penned in moments of solitude by the ocean's edge or beneath a moonlit sky. They capture the warmth of longing, the weight of separation, and the beauty of a love that transforms even the darkest nights. These words are raw, unpolished, and deeply personal—a journal of emotions poured onto paper to keep the writer alive, to keep the beloved close.<br><br><b>You and the Moon</b> weaves a tapestry of romantic yearning, natural imagery, and the quiet hope of reunion. It is for those who have loved from afar, who have found solace in the thought of another, and who have felt the universe shift with every memory of their muse.<br><br>This collection doesn't promise closure. It is a bridge across the distance, a light to guide those who refuse to let love dim."
    },
    { 
        title: "A Fool's Dream", 
        href: "pdfs/A Fool's Dream.pdf", 
        imgSrc: "webp src/A Fools Dream.webp", 
        alt: "A Fool's Dream - Philosophical Poetry by Iron Heist",
        tooltip: "Plunge into the abyss of a restless mind, where dreams crumble like ash and ghosts of doubt haunt every page, leaving only echoes of what might have been.",
        intro: "Dreams are the refuge of fools—beautiful illusions that cradle us until reality wakes us with its cold touch. <b>A Fool's Dream</b> is not just a collection of poems—it is a haunting exploration of the chasm between longing and truth, a quiet lament for the <b>unreachable</b> and the <b>unfulfilled</b>.<br><br>Each poem here is a whisper from a soul caught in the twilight of hope and despair. They are born from the ache of unwritten words, the weight of a past that drifts out of reach, and the torment of a self that haunts its own shadows. This collection dances with the ghosts of dreams—illusions of love, connection, and meaning that shimmer just beyond grasp, only to dissolve in the light of day.<br><br><b>A Fool's Dream</b> delves into the depths of despair, the sting of distance, and the bittersweet companionship of darkness. It is for those who have chased visions they could never hold, who have felt the sting of being a letdown to themselves and others, and who have wondered if their existence is more illusion than real.<br><br>These pages offer no awakening. They are a mirror for the dreamer, a quiet elegy for the fool who dares to believe in what might never be."
    }
];

// Array of quotes (excerpts from the books)
const quotes = [
    { text: "There will always be a fool within me, Perhaps that's why there's still a dream in me.", book: "A Fool's Dream" },
    { text: "You're always here in my mind Like a poem I could never write.", book: "A Fool's Dream" },
    { text: "Darkness is my closest ally. I see no escape from it. Perhaps it is my one and only friend.", book: "A Fool's Dream" },
    { text: "I look at the moon and I see you. If you are not perfect, then how do you manage to light me up in my darkest hours?", book: "You and the Moon" },
    { text: "My love for you is eternal. Come see yourself through my eyes. Have a glimpse at what my universe looks like.", book: "You and the Moon" },
    { text: "The ocean is a friend of mine, And now I worry about it being an enemy, For keeping me at bay, A long way away, Away from you.", book: "You and the Moon" },
    { text: "I am engulfed in this darkness. You are my light, and to this pain you are its cure.", book: "Drunk Off Her" },
    { text: "Dreams connect us. What I dream of is what my mind thinks of my own existence. Maybe that's why I dream of you every night.", book: "Drunk Off Her" },
    { text: "You were just some sand that I was trying so hard to cling onto. All the best parts of you slipped out.", book: "Drunk Off Her" },
    { text: "I speak of my grief the way I speak of God—religiously, yet like a friend in need.", book: "Garden of Grief" },
    { text: "Even if the universe is full of stars, It will still stay dark. And the only thing that can shine brighter than the darkness is you.", book: "Garden of Grief" },
    { text: "Loss is imminent. It may be my niece, a lover, or a dream that I failed to discover.", book: "Garden of Grief" },
    { text: "Love is a gamble. It comes with a price. The price you pay when you lose love is losing yourself.", book: "A Letdown" },
    { text: "You were my summer, My autumn, But now that you have left me cold, I declare you to be my winter.", book: "A Letdown" },
    { text: "You are the ghost I cannot seem to push away. You are the witch of my so-called 'dream forest.'", book: "A Letdown" }
];

// Array of Spotify playlists (embed URLs)
const playlists = [
    { title: "My Fav", embedUrl: "https://open.spotify.com/embed/playlist/4FYepxrlOEaPT1t6x4R4Vb?si=40d2fba2b9834060" },
    { title: "SadBoi Era", embedUrl: "https://open.spotify.com/embed/playlist/1pl65GxBYh9MbjPeg5NucI?si=97dbbabdce3649a6" },
    { title: "Bolly", embedUrl: "https://open.spotify.com/embed/playlist/2IvaBracxkcaOmQWmskvYB?si=43687b7ca8994fa3" }
];

// Array of blog posts
const blogPosts = [
    {
        id: 1,
        title: "The Ocean as Muse",
        excerpt: "The sea whispers secrets that find their way into my verses.",
        content: "Last night, I sat by the ocean, its waves a symphony of secrets. Each crash against the shore felt like a heartbeat, urging me to write. I've been working on a new poem for an upcoming collection, one that captures the vastness of longing—how it stretches like the horizon, endless yet unattainable. The ocean reminds me of <a href='book-details src/book-details.html?title=You and the Moon'>You and the Moon</a>, where distance is both a barrier and a muse. I wrote a line under the stars: <i>'Your absence is a tide, pulling me under.'</i> What is it about the sea that makes us feel so small, yet so alive?",
        date: "2025-04-14",
        keywords: ["ocean", "poetry", "reflection"]
    },
    {
        id: 2,
        title: "Echoes of Grief",
        excerpt: "Revisiting old wounds can spark new words.",
        content: "This week, I opened <a href='book-details src/book-details.html?title=Garden of Grief'>Garden of Grief</a> again, not to read but to remember. Each poem in that collection is a scar, healed but never forgotten. I found myself writing a new piece, something about how grief lingers like a guest who overstays. It's strange how pain can be a muse, how it carves space for hope. I thought of a line from <a href='book-details src/book-details.html?title=A Letdown'>A Letdown</a>: <i>'You were my summer, my autumn, but now my winter.'</i> Writing feels like excavating my soul—painful, but necessary. Has a memory ever inspired you to create?",
        date: "2025-04-21",
        keywords: ["grief", "poetry", "memory"]
    }
];

function renderBooks() {
    const bookCollection = document.getElementById('bookCollection');
    if (!bookCollection) return;

    let html = '';
    books.forEach(book => {
        html += `
<div class="book" data-title="${book.title}" role="article" aria-label="${book.title}" title="${book.tooltip}">
    <a href="book-details src/book-details.html?title=${encodeURIComponent(book.title)}">
        <img src="${book.imgSrc}" alt="${book.alt}" loading="lazy">
        <p class="book-title">${book.title}</p>
    </a>
</div>
`;
    });
    bookCollection.innerHTML = html;
}

function typeWriterQuote(quoteElement, text, speed = 50) {
    quoteElement.innerHTML = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            quoteElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function displayRandomQuote() {
    const quoteContainer = document.getElementById('quoteContainer');
    if (!quoteContainer) return;

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteContainer.innerHTML = `
        <blockquote class="quote-text"></blockquote>
        <p class="quote-source">— <a href="book-details src/book-details.html?title=${encodeURIComponent(randomQuote.book)}">${randomQuote.book}</a></p>
    `;
    const quoteTextElement = quoteContainer.querySelector('.quote-text');
    typeWriterQuote(quoteTextElement, `"${randomQuote.text}"`);
}

function renderPlaylists() {
    const playlistContainer = document.getElementById('spotifyPlaylists');
    if (!playlistContainer) return;

    let html = '';
    playlists.forEach(playlist => {
        html += `
<div class="spotify-playlist">
    <h3>${playlist.title}</h3>
    <iframe src="${playlist.embedUrl}" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
</div>
`;
    });
    playlistContainer.innerHTML = html;
}

function getWeeklyPosts() {
    const today = new Date();
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(today.getDate() - 7);
    const weeklyPosts = blogPosts.filter(post => {
        const postDate = new Date(post.date);
        return postDate >= oneWeekAgo && postDate <= today;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
    return weeklyPosts.length > 0 ? weeklyPosts : blogPosts.slice(0, 3).sort((a, b) => new Date(b.date) - new Date(a.date));
}

function renderBlogPreview() {
    const blogContainer = document.getElementById('blogContainer');
    if (!blogContainer) return;

    const weeklyPosts = getWeeklyPosts();
    blogContainer.innerHTML = weeklyPosts.map(post => `
        <div class="blog-post">
            <h3>${post.title}</h3>
            <p class="blog-date">${new Date(post.date).toLocaleDateString()}</p>
            <p>${post.excerpt}</p>
            <a href="blog src/blog-post.html?id=${post.id}" class="read-more">Read More</a>
        </div>
    `).join('');
}

function renderBlogList() {
    const blogListContainer = document.getElementById('blogList');
    if (!blogListContainer) return;

    blogListContainer.innerHTML = blogPosts.map(post => `
        <div class="blog-post">
            <h3>${post.title}</h3>
            <p class="blog-date">${new Date(post.date).toLocaleDateString()}</p>
            <p>${post.excerpt}</p>
            <a href="blog src/blog-post.html?id=${post.id}" class="read-more">Read More</a>
        </div>
    `).join('');
}

function renderBlogArchive() {
    const archiveContainer = document.getElementById('blogArchive');
    if (!archiveContainer) return;

    const archive = {};
    blogPosts.forEach(post => {
        const date = new Date(post.date);
        const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        if (!archive[yearMonth]) archive[yearMonth] = [];
        archive[yearMonth].push(post);
    });

    let html = '';
    Object.keys(archive).sort().reverse().forEach(yearMonth => {
        const [year, month] = yearMonth.split('-');
        html += `
            <div class="archive-month">
                <h3>${new Date(year, month - 1).toLocaleString('default', { month: 'long' })} ${year}</h3>
                <ul>
                    ${archive[yearMonth].map(post => `
                        <li>
                            <a href="blog src/blog-post.html?id=${post.id}">${post.title}</a>
                            <span class="archive-date">${new Date(post.date).toLocaleDateString()}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    });
    archiveContainer.innerHTML = html;
}

function renderBlogPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const post = blogPosts.find(p => p.id === postId);
    const postContainer = document.getElementById('postContainer');
    if (!post || !postContainer) return;

    postContainer.innerHTML = `
        <h2>${post.title}</h2>
        <p class="blog-date">${new Date(post.date).toLocaleDateString()}</p>
        <p>${post.content}</p>
        <a href="blog src/blog.html" class="cta-button secondary">Back to Blog</a>
    `;
}

function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    if (!dateTimeElement) return;

    const now = new Date();
    dateTimeElement.textContent = now.toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
}

function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function toggleDarkMode() {
    const body = document.body;
    const checkbox = document.getElementById('darkModeToggle');
    const slider = document.querySelector('.dark-mode-slider');
    const signatureImg = document.querySelector('.signature-img');
    const authorImage = document.querySelector('.author-image');
    
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    
    if (checkbox) checkbox.checked = isDarkMode;
    if (slider) slider.setAttribute('aria-checked', isDarkMode.toString());
    if (signatureImg) {
        signatureImg.src = isDarkMode ? 'png src/3.png' : 'png src/2.png';
    }
    if (authorImage) {
        authorImage.style.backgroundImage = isDarkMode ? "url('webp src/3.webp')" : "url('webp src/2.webp')";
    }
    localStorage.setItem('darkMode', isDarkMode);
}

function setupBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (!backToTopButton) return;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function searchBooks() {
    const input = document.getElementById('searchInput');
    if (!input) return;

    const filter = input.value.toLowerCase();
    const booksElements = document.querySelectorAll('.book');
    booksElements.forEach(book => {
        const title = book.getAttribute('data-title').toLowerCase();
        book.style.display = title.includes(filter) ? '' : 'none';
    });
}

function searchBlogPosts() {
    const input = document.getElementById('blogSearchInput');
    if (!input) return;

    const filter = input.value.toLowerCase();
    const blogPostsElements = document.querySelectorAll('.blog-post');
    blogPostsElements.forEach(post => {
        const title = post.querySelector('h3').textContent.toLowerCase();
        post.style.display = title.includes(filter) ? '' : 'none';
    });
}

function redirectToRandomPoem() {
    const randomBook = books[Math.floor(Math.random() * books.length)];
    window.location.href = `viewer src/viewer.html?pdf=${encodeURIComponent(randomBook.href)}&title=${encodeURIComponent(randomBook.title)}`;
}

function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.querySelector('.nav-toggle');
    navLinks.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', navLinks.classList.contains('active').toString());
}

function observeSections() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
}

document.addEventListener('DOMContentLoaded', () => {
    renderBooks();
    displayRandomQuote();
    renderPlaylists();
    renderBlogPreview();
    renderBlogList();
    renderBlogArchive();
    renderBlogPost();
    updateDateTime();
    setCurrentYear();
    observeSections();
    setupBackToTop();

    // Apply saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        const checkbox = document.getElementById('darkModeToggle');
        if (checkbox) checkbox.checked = true;
        const slider = document.querySelector('.dark-mode-slider');
        if (slider) slider.setAttribute('aria-checked', 'true');
        const signatureImg = document.querySelector('.signature-img');
        if (signatureImg) signatureImg.src = 'png src/3.png';
        const authorImage = document.querySelector('.author-image');
        if (authorImage) authorImage.style.backgroundImage = "url('webp src/3.webp')";
    }

    // Set up event listeners
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
    }

    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', toggleDarkMode);
    }

    setInterval(updateDateTime, 1000);
});
