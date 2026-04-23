// Array of books with their details
const books = [
    { 
        title: "Garden of Grief", 
        href: "pdfs/GARDEN OF GRIEF.pdf", 
        imgSrc: "webp src/GOG.webp", 
        alt: "Garden of Grief - A Collection of Poems by Iron Heist",
        tooltip: "I speak of my grief the way I speak of God. Religiously. These poems are what I couldn't say out loud.",
        intro: "I speak of my grief the way I speak of God. Religiously. Like it's always been there.<br><br>I started writing this because I didn't know what else to do with everything I was carrying. Nights of overthinking, love that ran out before I did, faith that kept shifting under my feet. Each poem is what I couldn't say to anyone's face.<br><br>The book moves in four parts. A Diary of My Thoughts is the raw stuff: love, heartbreak, 3am. Midday Blues is about faith and losing your sense of who you are. Fading Light? is the slow acceptance that some things don't come back. Dawn & Dusk is the reckoning, grief and hope living in the same chest.<br><br>I'm not giving you answers here. I never had any. But if you've ever carried something you couldn't name, maybe you'll recognize something in these pages."
    },
    { 
        title: "A Diary of My Thoughts", 
        href: "pdfs/A Diary of my Thoughts.pdf", 
        imgSrc: "webp src/A Diary of my thoughts.webp", 
        alt: "A Diary of My Thoughts - Philosophical Poetry by Iron Heist",
        tooltip: "I wrote these in the hours I should've been sleeping. Every line is something I couldn't tell anyone.",
        intro: "I wrote these in the hours I should've been sleeping.<br><br>Most of them started as single lines I scribbled before I forgot them. Feelings I couldn't explain to anyone who wasn't already in my head. There's something about loving someone so much it eats you alive — and you keep going back anyway.<br><br>That's what this book is. The pull toward something that's destroying you. The sleeplessness. The memories you can't turn off. I kept pouring it onto paper because it was the only thing that made any sense.<br><br>If you've ever lain awake replaying things, or felt a longing you couldn't name — you'll know what this is. Not a cure. Just proof that someone else was there."
    },
    { 
        title: "Midday Blues", 
        href: "pdfs/Midday Blues.pdf", 
        imgSrc: "webp src/Midday Blues.webp", 
        alt: "Midday Blues - Emotional Poetry by Iron Heist",
        tooltip: "There's an ache that hits in the middle of the day. When you're supposed to be fine. This is that.",
        intro: "There's a particular kind of ache that hits in the middle of the day. Not at 3am. Midday. When everything seems fine and nothing is.<br><br>I was questioning everything when I wrote these — faith, love, who I thought I was. Chasing a feeling I knew wasn't coming back. Some of these poems are about love. Some are about God. Most are about being lost somewhere in between.<br><br>I don't resolve anything by the end. That wasn't the point. The point was to name what was there and sit with it for a while."
    },
    { 
        title: "Fading Light?", 
        href: "pdfs/Fading Light.pdf", 
        imgSrc: "webp src/Fading Light.webp", 
        alt: "Fading Light? - Philosophical Poetry by Iron Heist",
        tooltip: "It's not the sudden drop that destroys you. It's the slow dimming. This is about watching the light go out.",
        intro: "The worst part of losing something isn't the sudden drop. It's the slow dimming. When something that used to be bright just fades without warning.<br><br>These are letters I never sent. A warmth that turned into smoke. I wrote these poems while watching something leave — and I wasn't even sure what I was losing until it was already gone.<br><br>The question mark in the title is deliberate. I still don't know if the light was ever really there, or if I imagined it."
    },
    { 
        title: "Dawn & Dusk", 
        href: "pdfs/Dawn and Dusk.pdf", 
        imgSrc: "webp src/Dawn & Dusk.webp", 
        alt: "Dawn & Dusk - Reflective Poetry by Iron Heist",
        tooltip: "I've spent a lot of time between states. Not quite dark, not quite light. These poems live there.",
        intro: "I've spent a lot of time between states. Not quite dark, not quite light. The in-between is where most of these poems came from.<br><br>Dawn & Dusk is about the contrasts that won't resolve. Love and hate living in the same chest, hope and despair taking turns. I think about frozen rivers. About summers that ended too fast. These poems came from that space between one thing and another.<br><br>They don't tidy up neatly at the end. Life doesn't either."
    },
    { 
        title: "A Letdown", 
        href: "pdfs/A Letdown.pdf", 
        imgSrc: "webp src/A Letdown.webp", 
        alt: "A Letdown - Emotional Poetry by Iron Heist",
        tooltip: "You were my summer. My autumn. Then you left me cold. This is what that cost.",
        intro: "You were my summer. My autumn. But then you left me cold, so I declared you my winter.<br><br>I wrote this book while still inside the wreckage. This is about the price of loving someone — the pieces of yourself you spend, and what happens when they don't come back. There's a particular kind of damage that only someone you trusted can cause.<br><br>I'm not angry here. I'm just honest about what it cost."
    },
    { 
        title: "Drunk Off Her", 
        href: "pdfs/DRUNK OFF HER.pdf", 
        imgSrc: "webp src/Drunk OFF her.webp", 
        alt: "Drunk Off Her - Romantic Poetry by Iron Heist",
        tooltip: "I couldn't get her out of my head long after it was over. Some people leave like that. Like a substance.",
        intro: "I couldn't get her out of my head. That's really all this is.<br><br>Every poem here is a pulse of something I couldn't shake. The highs, the lows, the part where you can't tell if you're healing or just forgetting. I was drunk on the memory of her long after the actual thing was over. Some people leave like that, less like a person, more like a substance you're coming down from.<br><br>I wrote these trying to find myself somewhere in the wreckage of caring about someone that much."
    },
    { 
        title: "You and the Moon", 
        href: "pdfs/You and the Moon.pdf", 
        imgSrc: "webp src/You are my moonlight.webp", 
        alt: "You and the Moon - Romantic Poetry by Iron Heist",
        tooltip: "I look at the moon and I see you. These are the letters that didn't go anywhere.",
        intro: "I look at the moon and I see you. That's where this book started.<br><br>These are the poems I wrote by the ocean when the distance felt loudest. Letters that didn't go anywhere. Thoughts I had at 2am that I couldn't send. Every piece here was written to keep me close to something that kept getting further away.<br><br>Love across distance is its own kind of pain. You can't touch it. You just sit with it and write about the moon."
    },
    { 
        title: "A Fool's Dream", 
        href: "pdfs/A Fool's Dream.pdf", 
        imgSrc: "webp src/A Fools Dream.webp", 
        alt: "A Fool's Dream - Philosophical Poetry by Iron Heist",
        tooltip: "There will always be a fool within me. Perhaps that's why there's still a dream in me.",
        intro: "There will always be a fool within me. Perhaps that's why there's still a dream in me.<br><br>I wrote most of this in the dark. These poems are about the things I chase knowing they won't come. The illusions I refuse to let go of. The kind of haunting that comes from your own mind, not from anything outside it.<br><br>Darkness is my closest ally. Maybe the dreams only exist because of the dark they grow in. I'm not trying to wake anyone up here. Some of us need to keep dreaming."
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
    { text: "I speak of my grief the way I speak of God. Religiously, yet like a friend in need.", book: "Garden of Grief" },
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

function renderBooks() {
    const bookCollection = document.getElementById('bookCollection');
    if (!bookCollection) return;

    let html = '';
    books.forEach(book => {
        html += `
<div class="book" data-title="${book.title}" role="article" aria-label="${book.title}" title="${book.tooltip}">
    <a href="book-details%20src/book-details.html?title=${encodeURIComponent(book.title)}">
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
        <blockquote class="quote-text" aria-live="polite"></blockquote>
        <p class="quote-source"><a href="book-details%20src/book-details.html?title=${encodeURIComponent(randomQuote.book)}">${randomQuote.book}</a></p>
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
        <div class="blog-post" data-excerpt="${post.excerpt}" data-keywords="${(post.keywords || []).join(' ')}">
            <h3>${post.title}</h3>
            <p class="blog-date">${new Date(post.date).toLocaleDateString()}</p>
            <p>${post.excerpt}</p>
            <a href="blog%20src/blog-post.html?id=${post.id}" class="read-more">Read More</a>
        </div>
    `).join('');
}

function renderBlogList() {
    const blogListContainer = document.getElementById('blogList');
    if (!blogListContainer) return;

    blogListContainer.innerHTML = blogPosts.map(post => `
        <div class="blog-post" data-excerpt="${post.excerpt}" data-keywords="${(post.keywords || []).join(' ')}">
            <h3>${post.title}</h3>
            <p class="blog-date">${new Date(post.date).toLocaleDateString()}</p>
            <p>${post.excerpt}</p>
            <a href="blog-post.html?id=${post.id}" class="read-more">Read More</a>
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
                            <a href="blog-post.html?id=${post.id}">${post.title}</a>
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

    const wordCount = post.content.replace(/<[^>]+>/g, '').split(/\s+/).length;
    const readTime = Math.max(1, Math.round(wordCount / 200));
    postContainer.innerHTML = `
        <article class="blog-post-article">
            <h1 class="post-title">${post.title}</h1>
            <div class="post-meta">
                <span class="blog-date">${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span class="read-time">~${readTime} min read</span>
            </div>
            <div class="post-body">${post.content}</div>
            <a href="blog.html" class="back-to-blog">← Back to Blog</a>
        </article>
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
        const excerpt = (post.dataset.excerpt || '').toLowerCase();
        const keywords = (post.dataset.keywords || '').toLowerCase();
        post.style.display = (title.includes(filter) || excerpt.includes(filter) || keywords.includes(filter)) ? '' : 'none';
    });
}

function setupNewsletter() {
    document.querySelectorAll('.newsletter-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input[type="email"]');
            if (!input || !input.value.trim()) return;
            const msg = document.createElement('p');
            msg.className = 'newsletter-success';
            msg.textContent = 'Thanks for subscribing!';
            msg.style.cssText = 'color: var(--primary-color); margin-top: 8px; font-size: 0.95rem;';
            this.replaceWith(msg);
        });
    });
}

function redirectToRandomPoem() {
    const randomBook = books[Math.floor(Math.random() * books.length)];
    window.location.href = `viewer%20src/viewer.html?pdf=${encodeURIComponent(randomBook.href)}&title=${encodeURIComponent(randomBook.title)}`;
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
    setupNewsletter();

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
