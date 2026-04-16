async function fetchAndRenderPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

function displayPosts(posts) {
    const ul = document.getElementById('post-list');
    
    // Safety check: if ul isn't found, stop here
    if (!ul) return;

    posts.forEach(post => {
        const li = document.createElement('li');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');

        h1.textContent = post.title;
        p.textContent = post.body;

        li.appendChild(h1);
        li.appendChild(p);
        ul.appendChild(li);
    });
}

// THIS IS THE KEY FIX:
// Wait for the DOM to be fully loaded before running the fetch
window.addEventListener('DOMContentLoaded', () => {
    fetchAndRenderPosts();
});