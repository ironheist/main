# 📜 Iron Heist Poetry Website

![Header](https://img.shields.io/badge/Iron_Heist-Poetry_Website-blueviolet?style=for-the-badge&logo=book&logoColor=white)  
Welcome to the **Iron Heist Poetry Website**, a personal project by John Colt (Iron Heist). This site showcases a collection of poetry books, blog posts, Spotify playlists, and a PDF viewer for reading poetry collections. Built with HTML, CSS, and JavaScript, the website offers a clean, responsive design with dynamic content rendering.

## 🚀 Highlights

- 📚 **Poetry Collections**: Browse and read poetry books with WebP cover images and PDF access.
- ✍️ **Blog Posts**: Explore recent blog posts with previews and full content.
- 🎶 **Spotify Playlists**: Enjoy embedded Spotify playlists curated by Iron Heist.
- 🌙 **Dark Mode**: Toggle between light and dark themes for a comfortable reading experience.
- 📖 **PDF Viewer**: Read poetry books directly on the site via a dedicated viewer.

## 📋 Table of Contents

- File Structure
- Project Overview
- Changes Made
- Instructions for Adding New Content
  - Adding a New Book
  - Adding a New Quote
  - Adding a New Spotify Playlist
  - Adding a New Blog Post
- Running the Project
- Notes
- Credits
- Copyright

## 📂 File Structure

```
root/
├── index.html              # Homepage with books, quotes, blogs, and playlists
├── script.js               # JavaScript for dynamic content rendering
├── styles.css              # CSS for styling the website
├── blog src/               # Blog-related pages
│   ├── blog.html           # Blog listing page
│   └── blog-post.html      # Individual blog post page
├── book-details src/       # Book details page
│   ├── book-details.html   # Displays selected book details
│   ├── book-details.js     # JavaScript for book details page
│   └── book-details.css    # CSS for book details page
├── fonts src/              # Custom fonts
│   └── KirimomiSwash.ttf   # Custom font for book-details page
├── jpegs/                  # Directory for JPEG images (unused)
├── pdfs/                   # PDF files for poetry books
│   ├── GARDEN OF GRIEF.pdf
│   ├── A Diary of my Thoughts.pdf
│   ├── Midday Blues.pdf
│   ├── Fading Light.pdf
│   ├── Dawn and Dusk.pdf
│   ├── A Letdown.pdf
│   ├── DRUNK OFF HER.pdf
│   ├── You and the Moon.pdf
│   └── A Fool's Dream.pdf
├── png src/                # PNG images (social icons, favicon, etc.)
│   ├── instagram.png
│   ├── wattpad.png
│   ├── tumblr.png
│   ├── top.png             # Back-to-top icon
│   └── 1.png               # Favicon
├── svg src/                # Directory for SVG images (unused)
├── viewer src/             # PDF viewer page
│   └── viewer.html         # Page for viewing PDFs
├── webp src/               # WebP images (book covers)
│   ├── GOG.webp
│   ├── A Diary of my thoughts.webp
│   ├── Midday Blues.webp
│   ├── Fading Light.webp
│   ├── Dawn & Dusk.webp
│   ├── A Letdown.webp
│   ├── Drunk OFF her.webp
│   ├── You are my moonlight.webp
│   └── A Fools Dream.webp
└── README.md               # Project documentation
```

## 📖 Project Overview

The website is designed to share Iron Heist’s poetry with the world. Key features include:

- **Homepage (**`index.html`**)**: Displays a book collection, a random quote, blog previews, and Spotify playlists.
- **Book Details (**`book-details.html`**)**: Shows a selected book’s cover, introduction, and a link to read the PDF.
- **Blog Pages (**`blog.html`**,** `blog-post.html`**)**: Lists all blog posts and displays full content for individual posts.
- **PDF Viewer (**`viewer.html`**)**: Allows users to read poetry books in PDF format directly on the site.

The site uses `script.js` for dynamic rendering of content and interactivity like dark mode and navigation toggles.

## 🔍 Changes Made

The project faced issues with WebP image loading on `book-details.html` and `index.html`. Here’s how they were resolved:

### Issue 1: WebP Images Not Loading on `book-details.html`

- **Problem**: Incorrect `imgSrc` paths in `script.js` (`webp src/<filename>.webp`) resolved incorrectly from `book-details src/`.
- **Fix**: Updated `book-details.js` to prepend `../` to `imgSrc` paths, ensuring correct resolution to `root/webp src/`.

### Issue 2: WebP Images Not Loading on `index.html`

- **Problem**: Path adjustments broke image loading on `index.html`.
- **Fix**: Reverted `imgSrc` paths in `script.js` to `webp src/<filename>.webp` (correct for `index.html`) and adjusted `book-details.js` to handle the path for `book-details.html`.

These changes ensure images load correctly on both pages.

## 📝 Instructions for Adding New Content

### Adding a New Book

1. **Add the PDF File**:

   - Place the book’s PDF in `pdfs/` (e.g., `pdfs/New Book.pdf`).

2. **Add the WebP Cover Image**:

   - Convert the cover to WebP and place it in `webp src/` (e.g., `webp src/New Book.webp`).

3. **Update** `script.js`:

   - Add a new book object to the `books` array:

     ```javascript
     {
         title: "New Book",
         href: "pdfs/New Book.pdf",
         imgSrc: "webp src/New Book.webp",
         alt: "New Book - Poetry by Iron Heist",
         tooltip: "A new collection of poems.",
         intro: "This is a new book by Iron Heist.<br><br>Explore themes of hope and renewal."
     }
     ```

4. **Test**:

   - Start a local server: `python -m http.server 8000`.
   - Visit `http://localhost:8000/index.html` and confirm the book appears.
   - Click the book to verify `book-details.html` loads correctly.

### Adding a New Quote

1. **Update** `script.js`:

   - Add a new quote to the `quotes` array:

     ```javascript
     { text: "A new quote to inspire.", book: "New Book" }
     ```

2. **Test**:

   - Reload `index.html` and refresh to see the new quote in the random quote section.

### Adding a New Spotify Playlist

1. **Get the Embed URL**:

   - Copy the embed URL from Spotify (e.g., `https://open.spotify.com/embed/playlist/<id>?si=<some-id>`).

2. **Update** `script.js`:

   - Add a new playlist to the `playlists` array:

     ```javascript
     { title: "New Playlist", embedUrl: "https://open.spotify.com/embed/playlist/<id>?si=<some-id>" }
     ```

3. **Test**:

   - Reload `index.html` and confirm the playlist appears in the playlists section.

### Adding a New Blog Post

1. **Update** `script.js`:

   - Add a new post to the `blogPosts` array:

     ```javascript
     {
         id: 3,
         title: "New Blog Post",
         excerpt: "A new reflection on poetry.",
         content: "This is the full content of the new blog post.",
         date: "2025-04-28",
         keywords: ["poetry", "reflection"]
     }
     ```

2. **Test**:

   - Check `index.html` for the blog preview.
   - Visit `blog.html` and `blog-post.html?id=3` to confirm the post displays correctly.

## 🛠️ Running the Project

1. **Start a Local Server**:

   - In the `root/` directory, run:

     ```bash
     python -m http.server 8000
     ```

2. **Access the Website**:

   - Open `http://localhost:8000/index.html` in your browser.

3. **Troubleshooting**:

   - Check the browser’s Network tab (F12) for 404 errors if resources don’t load.
   - Verify file paths in `script.js`.
   - Clear browser cache if changes don’t appear.

## 📌 Notes

- **Case Sensitivity**: File names and paths are case-sensitive on some servers. Ensure consistency (e.g., `GOG.webp` matches the file name).
- **Future Improvements**:
  - Add a `BASE_PATH` variable in `script.js` for more portable paths.
  - Implement error handling for failed image or PDF loads.
- **Dependencies**: The project uses Font Awesome via CDN for icons. An internet connection is required.

## 🙌 Credits

- **Author**: Iron Heist (John Colt)
- **Icons**: Sourced from Flaticon (see attribution in the website footer).
- AI for helping me build this website

## © Copyright

© 2025 Iron Heist (John Colt). All rights reserved. For permissions or inquiries, contact ironheist6@gmail.com.

---

**Last Updated**: April 27, 2025
