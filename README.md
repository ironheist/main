Iron Heist Poetry Website
This project is a personal poetry website for Iron Heist (John Colt), showcasing a collection of poetry books, blog posts, Spotify playlists, and a PDF viewer for reading the poetry collections. The website is built using HTML, CSS, and JavaScript, with a focus on a clean, responsive design and dynamic content rendering.
File Structure
Below is the file structure of the project:
root/
├── index.html              # Main homepage displaying book collection, quotes, blog previews, and playlists
├── script.js               # Main JavaScript file for dynamic content rendering (books, quotes, playlists, blogs)
├── styles.css              # Main CSS file for styling the website
├── blog src/               # Directory for blog-related pages
│   ├── blog.html           # Blog page listing all blog posts
│   └── blog-post.html      # Individual blog post page
├── book-details src/       # Directory for book details page
│   ├── book-details.html   # Page displaying details of a selected book
│   ├── book-details.js     # JavaScript for book details page (loads book data dynamically)
│   └── book-details.css    # CSS for styling the book details page
├── fonts src/              # Directory for custom fonts
│   └── KirimomiSwash.ttf   # Custom font file used in book-details page
├── jpegs/                  # Directory for JPEG images (not used in current implementation)
├── pdfs/                   # Directory for PDF files of the poetry books
│   ├── GARDEN OF GRIEF.pdf
│   ├── A Diary of my Thoughts.pdf
│   ├── Midday Blues.pdf
│   ├── Fading Light.pdf
│   ├── Dawn and Dusk.pdf
│   ├── A Letdown.pdf
│   ├── DRUNK OFF HER.pdf
│   ├── You and the Moon.pdf
│   └── A Fool's Dream.pdf
├── png src/                # Directory for PNG images (social media icons, favicon, etc.)
│   ├── instagram.png
│   ├── wattpad.png
│   ├── tumblr.png
│   ├── top.png             # Back-to-top icon
│   └── 1.png               # Favicon
├── svg src/                # Directory for SVG images (not used in current implementation)
├── viewer src/             # Directory for PDF viewer page
│   └── viewer.html         # Page for viewing PDF files of the books
├── webp src/               # Directory for WebP images (book covers)
│   ├── GOG.webp
│   ├── A Diary of my thoughts.webp
│   ├── Midday Blues.webp
│   ├── Fading Light.webp
│   ├── Dawn & Dusk.webp
│   ├── A Letdown.webp
│   ├── Drunk OFF her.webp
│   ├── You are my moonlight.webp
│   └── A Fools Dream.webp
└── README.md               # Project documentation (this file)

Project Overview
The website consists of the following main pages:

index.html: The homepage, which includes:
A collection of books with WebP cover images.
A random quote from the books.
A preview of recent blog posts.
Embedded Spotify playlists.


book-details.html: A page displaying details of a selected book, including its cover image, introduction, and a button to read the book in the PDF viewer.
blog.html: A page listing all blog posts.
blog-post.html: A page displaying the full content of a single blog post.
viewer.html: A page for viewing the PDF files of the poetry books.

The website uses script.js to dynamically render content (books, quotes, playlists, blogs) and handle interactivity (dark mode toggle, navigation menu toggle, etc.).
Changes Made
The project encountered issues with WebP images not loading on book-details.html and later on index.html. Below is a summary of the changes made to resolve these issues:
Issue 1: WebP Images Not Loading on book-details.html

Problem: The imgSrc paths in the books array in script.js were set as webp src/<filename>.webp. Since book-details.html is in book-details src/, this path resolved incorrectly to root/book-details src/webp src/<filename>.webp, which does not exist.
Initial Fix:
Updated the imgSrc paths in the books array in script.js to ../webp src/<filename>.webp. This path is correct for book-details.html as it navigates up to root/ and then into webp src/.
Modified the renderBooks function in script.js to adjust the path for index.html by replacing ../ with book-details src/, resulting in book-details src/webp src/<filename>.webp.



Issue 2: WebP Images Not Loading on index.html

Problem: The adjustment in renderBooks caused the paths to resolve incorrectly for index.html. The path book-details src/webp src/<filename>.webp resolved to root/book-details src/webp src/<filename>.webp, which does not exist.
Final Fix:
Reverted the imgSrc paths in the books array in script.js to webp src/<filename>.webp. This path is correct for index.html (in root/), as it resolves directly to root/webp src/<filename>.webp.
Removed the path adjustment in the renderBooks function, so it now uses book.imgSrc directly.
Updated book-details.js to prepend ../ to the imgSrc path when setting the image source for book-details.html. The line:document.getElementById('bookCover').src = book.imgSrc;

was changed to:document.getElementById('bookCover').src = `../${book.imgSrc}`;

This ensures the path resolves correctly from book-details src/ to root/webp src/<filename>.webp.



These changes ensure that WebP images load correctly on both index.html and book-details.html.
Instructions for Adding New Content
Adding a New Book
To add a new book to the website, follow these steps:

Add the PDF File:

Place the PDF file of the new book in the pdfs/ directory.
Example: If the book is titled "New Book", the file might be pdfs/New Book.pdf.


Add the WebP Cover Image:

Convert the book's cover image to WebP format (you can use an online converter or a tool like ImageMagick).
Place the WebP image in the webp src/ directory.
Example: webp src/New Book.webp.
Ensure the file name matches the imgSrc path you’ll define (case-sensitive).


Update the books Array in script.js:

Open script.js and locate the books array.
Add a new object for the book with the following properties:
title: The title of the book (string).
href: The path to the PDF file, relative to root/ (e.g., pdfs/New Book.pdf).
imgSrc: The path to the WebP cover image, relative to root/ (e.g., webp src/New Book.webp).
alt: A descriptive alt text for the cover image (string).
tooltip: A short description for the book (appears as a tooltip on index.html).
intro: A longer introduction or description of the book (HTML string, displayed on book-details.html).


Example:{
    title: "New Book",
    href: "pdfs/New Book.pdf",
    imgSrc: "webp src/New Book.webp",
    alt: "New Book - Poetry by Iron Heist",
    tooltip: "A new collection of poems exploring themes of hope and renewal.",
    intro: "This is a new book by Iron Heist, diving into the themes of hope and renewal through poetic verses.<br><br>Each poem reflects a journey of self-discovery and healing."
}


Add this object to the books array (you can place it anywhere in the array, but typically at the end).


Test the New Book:

Start a local server in the root/ directory:python -m http.server 8000


Open index.html in your browser:http://localhost:8000/index.html


Verify that the new book appears in the book collection with its cover image.
Click on the book to go to book-details.html (e.g., http://localhost:8000/book-details src/book-details.html?title=New%20Book) and confirm that the details (cover image, introduction, and "Press to Read" button) work correctly.



Adding a New Quote
To add a new quote to the random quote section on index.html:

Update the quotes Array in script.js:

Open script.js and locate the quotes array.
Add a new object with the following properties:
text: The quote text (string).
book: The title of the book the quote is from (string, must match a book title in the books array).


Example:{ text: "A new quote to inspire readers.", book: "New Book" }


Add this object to the quotes array.


Test the Quote:

Reload index.html in your browser.
Refresh the page multiple times to ensure the new quote appears in the random quote section (it may take a few refreshes due to the random selection).



Adding a New Spotify Playlist
To add a new Spotify playlist to the playlists section on index.html:

Get the Spotify Embed URL:

Go to Spotify, find the playlist, and click "Share" > "Copy Embed Code".
Extract the src URL from the embed code (e.g., https://open.spotify.com/embed/playlist/<playlist-id>?si=<some-id>).


Update the playlists Array in script.js:

Open script.js and locate the playlists array.
Add a new object with the following properties:
title: The name of the playlist (string).
embedUrl: The Spotify embed URL (string).


Example:{ title: "New Playlist", embedUrl: "https://open.spotify.com/embed/playlist/<new-playlist-id>?si=<some-id>" }


Add this object to the playlists array.


Test the Playlist:

Reload index.html in your browser.
Scroll to the playlists section and confirm the new playlist appears and plays correctly.



Adding a New Blog Post
To add a new blog post to the blog section:

Update the blogPosts Array in script.js:

Open script.js and locate the blogPosts array.
Add a new object with the following properties:
id: A unique integer ID for the post (increment the highest existing ID by 1).
title: The title of the blog post (string).
excerpt: A short summary of the post (string, displayed in previews).
content: The full content of the post (string, can include HTML).
date: The date of the post in YYYY-MM-DD format (string).
keywords: An array of keywords for search functionality (array of strings).


Example:{
    id: 3,
    title: "New Blog Post",
    excerpt: "A new reflection on poetry and life.",
    content: "This is the full content of the new blog post. I wrote this while reflecting on my latest work.",
    date: "2025-04-28",
    keywords: ["poetry", "reflection", "new"]
}


Add this object to the blogPosts array.


Test the Blog Post:

Open index.html and confirm the new post appears in the blog preview section (if it’s within the last week or among the top 3 recent posts).
Open blog.html (e.g., http://localhost:8000/blog src/blog.html) and confirm the new post appears in the list.
Click "Read More" to go to blog-post.html (e.g., http://localhost:8000/blog src/blog-post.html?id=3) and verify the full content displays correctly.



Running the Project
To run the project locally:

Start a Local Server:

Open a terminal in the root/ directory.
Run:python -m http.server 8000




Access the Website:

Open your browser and navigate to:http://localhost:8000/index.html


Explore the site by navigating to different pages (e.g., book-details.html, blog.html, viewer.html).


Troubleshooting:

If images or other resources don’t load, check the browser’s Developer Tools (F12) > Network tab for 404 errors.
Ensure file paths in script.js match the actual file locations.
Clear your browser cache or test in an incognito window if changes don’t appear.



Notes

Case Sensitivity: File names and paths are case-sensitive on some servers (e.g., Linux). Ensure that file names in script.js (e.g., GOG.webp) match the actual files in webp src/ (e.g., not gog.webp).
Future Improvements:
Consider adding a base path variable in script.js (e.g., const BASE_PATH = "") and constructing all paths dynamically (e.g., ${BASE_PATH}webp src/GOG.webp). This would make the project more portable if moved to a subdirectory.
Add error handling for cases where WebP images or PDFs fail to load.


Dependencies: The project uses external libraries like Font Awesome (via CDN) for icons. Ensure an internet connection is available for these to load.

Credits

Author: Iron Heist (John Colt)
Icons: Sourced from Flaticon (see attribution in the footer of index.html and book-details.html).

