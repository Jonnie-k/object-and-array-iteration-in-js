// Task 2: Determine the Design and Develop the Code
// Refactor with Async/Await - function to house fetch
async function fetchAndRenderPosts() {
    try {
        // Fetch data from the {JSON} Placeholder API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Apply await to convert response to JSON
        const posts = await response.json();

        // Pass the array of posts to the display function
        displayPosts(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

// Display Posts function as requested
function displayPosts(posts) {
    const ul = document.getElementById('post-list');

    // Loop through the posts list
    posts.forEach(post => {
        // Create elements
        const li = document.createElement('li');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');

        // Add content
        h1.textContent = post.title;
        p.textContent = post.body;

        // Append h1 and p to li
        li.appendChild(h1);
        li.appendChild(p);

        // Append li to the ul
        ul.appendChild(li);
    });
}

// Call the function to start the process
fetchAndRenderPosts();