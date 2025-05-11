# 📜 Iron Heist Poetry Website

![Header](https://img.shields.io/badge/Iron_Heist-Poetry_Website-blueviolet?style=for-the-badge&logo=book&logoColor=white)  
Welcome to the **Iron Heist Poetry Website**, a personal project by John Colt (Iron Heist). This site, named **VerseVault**, showcases a collection of poetry books, blog posts, Spotify playlists, and a PDF viewer for reading poetry collections. Built with HTML, CSS, and JavaScript, VerseVault offers a clean, responsive design with dynamic content rendering.

## 🚀 Highlights

- 📚 **Poetry Collections**: Browse and read poetry books with WebP cover images and PDF access.
- ✍️ **Blog Posts**: Explore recent blog posts with previews and full content.
- 🎶 **Spotify Playlists**: Enjoy embedded Spotify playlists curated by Iron Heist.
- 🌙 **Dark Mode**: Toggle between light and dark themes for a comfortable reading experience.
- 📖 **PDF Viewer**: Read poetry books directly on the site via a dedicated viewer.

## 📋 Table of Contents

- File Structure
- Project Overview
- UI Design
- Changes Made
- Grid Layout Rules
- Dark Mode Toggle Rules
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
│   └── book-details.css    # CSS for book-details page
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
├── png src/                # PNG images (social icons, favicon, signature, etc.)
│   ├── instagram.png
│   ├── wattpad.png
│   ├── tumblr.png
│   ├── top.png             # Back-to-top icon
│   ├── 1.png               # Favicon
│   └── 2.png               # Signature image for About section
├── svg src/                # SVG images for dark mode toggle
│   ├── moon.svg
│   └── sun.svg
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
└── README.markdown         # Project documentation
```

## 📖 Project Overview

The website is designed to share Iron Heist’s poetry with the world. Key features include:

- **Homepage (`index.html`)**: Displays a book collection, a random quote, blog previews, and Spotify playlists.
- **Book Details (`book-details.html`)**: Shows a selected book’s cover, introduction, and a link to read the PDF.
- **Blog Pages (`blog.html`, `blog-post.html`)**: Lists all blog posts and displays full content for individual posts.
- **PDF Viewer (`viewer.html`)**: Allows users to read poetry books in PDF format directly on the site.

The site uses `script.js` for dynamic rendering of content and interactivity like dark mode and navigation toggles.

## 🎨 UI Design

The UI, named **VerseVault**, is designed to be minimalist and elegant, prioritizing readability and aesthetic appeal for poetry enthusiasts. Below are the key design elements:

- **Design Philosophy**:
  - **Minimalist Aesthetic**: Clean layouts with ample whitespace to focus on content.
  - **Poetic Ambiance**: Soft typography and muted colors evoke a contemplative mood.
  - **Responsive Layout**: CSS Grid and Flexbox ensure adaptability across devices (mobile, tablet, desktop).
  - **Interactive Elements**: Smooth transitions for dark mode, hover effects on book cards, and a sticky navigation bar.

- **CSS Colors**:
  - **Light Mode**:
    - Background: `#FFFFFF` (white) for body, `#F8F8F8` (light gray) for sections.
    - Text: `#333333` (dark gray) for body text, `#000000` (black) for headings.
    - Accents: `#1E90FF` (dodger blue) for links, `#FFD700` (gold) for highlights.
    - Book Cards: `#FFFFFF` (white) with `#DDDDDD` (light gray) borders.
  - **Dark Mode**:
    - Background: `#1A1A1A` (near-black) for body, `#2C2C2C` (dark gray) for sections.
    - Text: `#F0F0F0` (off-white) for body text, `#FFFFFF` (white) for headings.
    - Accents: `#63B8FF` (light blue) for links, `#FFD700` (gold) for highlights.
    - Book Cards: `#333333` (dark gray) with `#444444` (darker gray) borders.
  - **Additional Colors**:
    - Hover Effects: `#FF4500` (orange-red) for buttons and interactive elements.
    - Social Icons: Monochrome `#333333` (light mode) and `#F0F0F0` (dark mode) with hover tint `#1E90FF`.

- **Typography**:
  - **Primary Font**: `'KirimomiSwash'` (via `fonts src/KirimomiSwash.ttf`) for headings and book titles, providing a handwritten, poetic flair.
  - **Fallback Font**: `'Georgia', serif` for body text, ensuring readability.
  - **Font Sizes**: `16px` base, `24px` for headings, `14px` for captions, with `1.5` line-height for readability.
  - **Media Queries**: Adjust font sizes for mobile (`14px` base) and desktop (`18px` base).

- **Design Elements**:
  - **CSS Grid**: Used for book collections, blog previews, and playlists for responsive, adaptive layouts.
  - **Flexbox**: Employed for navigation, footers, and card content alignment.
  - **Transitions**: `0.3s ease` for background, color, and hover effects to ensure smooth interactions.
  - **Icons**: Font Awesome for navigation and social icons, SVG (`moon.svg`, `sun.svg`) for dark mode toggle.
  - **Images**: WebP for book covers (`webp src/`), PNG for favicon and signature (`png src/`), optimized for fast loading.

## 🔍 Changes Made

The project faced issues with WebP image loading and has been updated to include new assets and features. Here’s a summary:

- **Issue 1: WebP Images Not Loading on `book-details.html`**:
  - **Problem**: Incorrect `imgSrc` paths in `script.js` (`webp src/<filename>.webp`) resolved incorrectly from `book-details src/`.
  - **Fix**: Updated `book-details.js` to prepend `../` to `imgSrc` paths, ensuring correct resolution to `root/webp src/`.
- **Issue 2: WebP Images Not Loading on `index.html`**:
  - **Problem**: Path adjustments broke image loading on `index.html`.
  - **Fix**: Reverted `imgSrc` paths in `script.js` to `webp src/<filename>.webp` (correct for `index.html`) and adjusted `book-details.js` to handle the path for `book-details.html`.
- **Asset Update**:
  - Added `png src/2.png` for the signature image in the "About the Poet" section of `index.html`.
  - Updated `svg src/` to include `moon.svg` and `sun.svg` for dark mode toggle icons.
- **Documentation Update**:
  - Updated `README.markdown` to reflect the addition of `2.png` in the file structure and added Grid Layout Rules and Dark Mode Toggle Rules sections.

## 📏 Grid Layout Rules

The website uses CSS Grid for responsive layouts in several sections (e.g., book collection, blog posts, playlists). Below are the rules to ensure consistent and stable grid layouts, primarily defined in `styles.css`:

- **Book Collection (`book-collection`) in `index.html`**:
  - **Rule**: Uses `display: grid` with `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))` to create a responsive grid that adapts to screen size, with each book card at least 250px wide.
  - **Gap**: `gap: 30px` for consistent spacing between book cards.
  - **Responsive Behavior**:
    - Mobile (<480px): 1 column.
    - Tablet (481px–768px): 2 columns.
    - Desktop (>768px): 3–4 columns, depending on viewport width.
  - **Child Elements**: Each `.book-card` has `width: 100%` and `aspect-ratio: 3/4` for uniform appearance.

- **Blog Posts (`blog-container`) in `index.html` and `blog.html`**:
  - **Rule**: Uses `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` for blog previews.
  - **Gap**: `gap: 20px`.
  - **Responsive Behavior**:
    - Mobile: 1 column.
    - Tablet: 1–2 columns.
    - Desktop: 2–3 columns.
  - **Child Elements**: `.blog-card` uses `flexbox` internally for content alignment.

- **Spotify Playlists (`spotify-playlists`) in `index.html`**:
  - **Rule**: Uses `grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))` to accommodate iframe sizes.
  - **Gap**: `gap: 20px`.
  - **Responsive Behavior**:
    - Mobile: 1 column (iframe width: 100%).
    - Desktop: 2 columns if viewport allows.
  - **Child Elements**: Spotify iframes have `width: 100%` and fixed `height: 152px`.

- **General Grid Rules**:
  - **Alignment**: All grids use `justify-items: center` and `align-items: start` for consistent positioning.
  - **Padding/Margin**: Parent containers have `padding: 20px` to prevent grid items from touching edges.
  - **Fallback**: For older browsers, `styles.css` includes `display: flex` with `flex-wrap: wrap` as a fallback.
  - **Media Queries**:
    - `@media (max-width: 480px)`: Adjust font sizes, padding, and grid gaps for mobile.
    - `@media (min-width: 769px)`: Increase gaps and card sizes for desktop.

## 🌙 Dark Mode Toggle Rules

Dark mode is implemented via a toggle in `index.html`, controlled by `script.js` and styled in `styles.css`. Below are the rules to ensure it works correctly:

- **Toggle Mechanism**:
  - A button with id `dark-mode-toggle` in `index.html` triggers the dark mode.
  - `script.js` adds/removes the `dark-mode` class on the `<body>` element when clicked.
  - Local storage saves the user’s preference (`localStorage.setItem('darkMode', 'enabled')`).

- **Styling Rules in `styles.css`**:
  - **Default (Light Mode)**:
    - Background: `background-color: #FFFFFF` (body), `background-color: #F8F8F8` (sections).
    - Text: `color: #333333`.
    - Book cards: `background-color: #FFFFFF; border: 1px solid #DDDDDD`.
    - Icons: Use `png src/` social icons and `svg src/sun.svg` for toggle.
  - **Dark Mode (`.dark-mode`)**:
    - Body: `background-color: #1A1A1A`.
    - Text: `color: #F0F0F0`.
    - Sections: `background-color: #2C2C2C`.
    - Book cards: `background-color: #333333; border: 1px solid #444444`.
    - Icons: Use `svg src/moon.svg` for toggle; social icons remain unchanged.
    - Links: `color: #63B8FF` with `hover: #FF4500` for visibility.

- **Transitions**:
  - Apply `transition: background-color 0.3s ease, color 0.3s ease` to `body`, `section`, `.book-card`, and other elements for smooth changes.
  - Avoid transitions on images to optimize performance.

- **Responsive Considerations**:
  - Ensure toggle button is visible and clickable on all screen sizes (`padding: 10px`, `font-size: 1.2rem`).
  - Test icon visibility (`sun.svg`, `moon.svg`) in both modes on mobile and desktop.

- **Error Handling**:
  - If `localStorage` is disabled, default to light mode.
  - If `svg src/moon.svg` or `sun.svg` is missing, fallback to text labels (“Light”/“Dark”).

## 📝 Instructions for Adding New Content

### Adding a New Book

1. **Add the PDF File**:
   - Place the book’s PDF in `pdfs/` (e.g., `pdfs/New Book.pdf`).
2. **Add the WebP Cover Image**:
   - Convert the cover to WebP and place it in `webp src/` (e.g., `webp src/New Book.webp`).
3. **Update `script.js`**:
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

1. **Update `script.js`**:
   - Add a new quote to the `quotes` array:
     ```javascript
     { text: "A new quote to inspire.", book: "New Book" }
     ```
2. **Test**:
   - Reload `index.html` and refresh to see the new quote in the random quote section.

### Adding a New Spotify Playlist

1. **Get the Embed URL**:
   - Copy the embed URL from Spotify (e.g., `https://open.spotify.com/embed/playlist/<id>?si=<some-id>`).
2. **Update `script.js`**:
   - Add a new playlist to the `playlists` array:
     ```javascript
     { title: "New Playlist", embedUrl: "https://open.spotify.com/embed/playlist/<id>?si=<some-id>" }
     ```
3. **Test**:
   - Reload `index.html` and confirm the playlist appears in the playlists section.

### Adding a New Blog Post

1. **Update `script.js`**:
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
- **Dependencies**: The project uses Font Awesome via CDN for icons and SVG icons (`moon.svg`, `sun.svg`) for dark mode. An internet connection is required.

## 🙌 Credits

- **Author**: Iron Heist (John Colt)
- **Icons**: Sourced from Flaticon (see attribution in the website footer).
- **AI Assistance**: Used for building and documenting the website.

## © Copyright

© 2025 Iron Heist (John Colt). All rights reserved. For permissions or inquiries, contact ironheist6@gmail.com.

---

**Last Updated**: May 11, 2025
