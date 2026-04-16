// 1. Change the Header
const header = document.querySelector('#header-id'); // Check index.html for the real ID
header.textContent = "Flatbook Bookstore";

// 2. The Loop for Books
// Assuming the object is named 'bookData'
bookData.forEach(book => {
    // Create elements
    const card = document.createElement('div');
    const title = document.createElement('h2');
    const author = document.createElement('p');
    const image = document.createElement('img');

    // Assign content
    title.textContent = book.title;
    author.textContent = book.author;
    image.src = book.image;

    // Put them together
    card.append(title, author, image);
    
    // Push to the page
    document.querySelector('#book-container').appendChild(card);
});