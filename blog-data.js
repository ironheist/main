// ============================================================
// BLOG DATA - Iron Heist Poetry
// ============================================================
// This is where all blog posts live. To write a new post,
// copy the template below, paste it as a new entry at the
// TOP of the blogPosts array (before the first { ), fill in
// the fields, and save the file. It will appear on the blog
// automatically.
//
// TEMPLATE - copy everything between the dashed lines:
// ----------------------------------------------------------
// {
//     id: <next number>,          // increment from the last post
//     title: "Your Post Title",
//     excerpt: "One line shown on the blog list page.",
//     content: `Write your full post here. Use <br><br> for
//               paragraph breaks. You can link to a book like this:
//               <a href='../book-details%20src/book-details.html?title=Garden%20of%20Grief'>Garden of Grief</a>
//               Use <i>text</i> for italics, <b>text</b> for bold.`,
//     date: "YYYY-MM-DD",         // e.g. "2026-04-24"
//     keywords: ["word1", "word2"] // helps the blog search
// },
// ----------------------------------------------------------
//
// NOTE: The content links use ../ because blog posts are
// displayed from inside the "blog src/" folder. Book links
// should always start with ../book-details%20src/
// ============================================================

const blogPosts = [
    {
        id: 2,
        title: "Echoes of Grief",
        excerpt: "Revisiting old wounds can spark new words.",
        content: "This week, I opened <a href='../book-details%20src/book-details.html?title=Garden%20of%20Grief'>Garden of Grief</a> again, not to read but to remember. Each poem in that collection is a scar, healed but never forgotten. I found myself writing a new piece, something about how grief lingers like a guest who overstays. It's strange how pain can be a muse, how it carves space for hope. I thought of a line from <a href='../book-details%20src/book-details.html?title=A%20Letdown'>A Letdown</a>: <i>'You were my summer, my autumn, but now my winter.'</i> Writing feels like excavating my soul, painful, but necessary. Has a memory ever inspired you to create?",
        date: "2025-04-21",
        keywords: ["grief", "poetry", "memory"]
    },
    {
        id: 1,
        title: "The Ocean as Muse",
        excerpt: "The sea whispers secrets that find their way into my verses.",
        content: "Last night, I sat by the ocean, its waves a symphony of secrets. Each crash against the shore felt like a heartbeat, urging me to write. I've been working on a new poem for an upcoming collection, one that captures the vastness of longing — how it stretches like the horizon, endless yet unattainable. The ocean reminds me of <a href='../book-details%20src/book-details.html?title=You%20and%20the%20Moon'>You and the Moon</a>, where distance is both a barrier and a muse. I wrote a line under the stars: <i>'Your absence is a tide, pulling me under.'</i> What is it about the sea that makes us feel so small, yet so alive?",
        date: "2025-04-14",
        keywords: ["ocean", "poetry", "reflection"]
    }
];
