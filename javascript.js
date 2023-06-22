function fetchBooks(searchTerm) {
    const apiUrl = `https://openlibrary.org/search.json?q=${searchTerm}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Handle the retrieved book data
        displayResults(data);
        // Print the count of books
        printCount(data.numFound);
      })
      .catch(error => {
        console.log('Error fetching book data:', error);
      });
  }
  
  function displayResults(data) {
    // Clear previous results
    const outputList = document.getElementById('list-output');
    outputList.innerHTML = '';
  
    if (data.numFound === 0) {
      alert('No results found! Please try again.');
      return;
    }
  
    // Process each book item
    data.docs.forEach(item => {
      const title = item.title ? item.title : 'Unknown Title';
      const authors = item.author_name ? item.author_name.join(', ') : 'Unknown Author';
      const publisher = item.publisher ? item.publisher[0] : 'Unknown Publisher';
      const bookLink = `https://openlibrary.org${item.key}`;
      const bookImg = `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`;
  
      // Create HTML elements for book display
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
  
      const bookImage = document.createElement('img');
      bookImage.src = bookImg;
      bookImage.alt = title;
      bookCard.appendChild(bookImage);
  
      const bookDetails = document.createElement('div');
      bookDetails.classList.add('book-details');
  
      const bookTitle = document.createElement('h2');
      bookTitle.textContent = title;
      bookDetails.appendChild(bookTitle);
  
      const bookAuthor = document.createElement('p');
      bookAuthor.textContent = `Author: ${authors}`;
      bookDetails.appendChild(bookAuthor);
  
      const bookPublisher = document.createElement('p');
      bookPublisher.textContent = `Publisher: ${publisher}`;
      bookDetails.appendChild(bookPublisher);
  
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');
  
      const bookReadLink = document.createElement('a');
      bookReadLink.href = bookLink;
      bookReadLink.textContent = 'Read Book';
      bookReadLink.target = '_blank';
      buttonContainer.appendChild(bookReadLink);
  
      const addToCartBtn = document.createElement('button');
      addToCartBtn.textContent = 'Add to Cart';
      addToCartBtn.addEventListener('click', function() {
        addToCart(item);
      });
      buttonContainer.appendChild(addToCartBtn);
  
      bookDetails.appendChild(buttonContainer);
  
      bookCard.appendChild(bookDetails);
  
      outputList.appendChild(bookCard);
    });
  }
  
  function addToCart(book) {
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('li');
    cartItem.textContent = book.title ? book.title : 'Unknown Title';
    cartItems.appendChild(cartItem);
    console.log('Book added to cart:', book);
  }
  
  function printCount(count) {
    const countOutput = document.getElementById('count-output');
    countOutput.textContent = count;
  
    const searchCount = document.getElementById('search-count');
    searchCount.style.display = 'block'; // Show the search count
  }
  
  const searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value.trim();
  
    if (searchTerm !== '') {
      fetchBooks(searchTerm);
    }
  });
  function addToCart(book) {
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('li');
    cartItem.textContent = book.title ? book.title : 'Unknown Title';
  
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
      cartItem.remove(); // Remove the cart item from the cart
      console.log('Book removed from cart:', book);
    });
  
    cartItem.appendChild(removeButton); // Add the remove button to the cart item
    cartItems.appendChild(cartItem);
    console.log('Book added to cart:', book);
  }
  const logoutButton = document.getElementById("logout-button");

  // Add event listener for logout button click
  logoutButton.addEventListener("click", function() {
    // Perform logout actions here
    // For example, redirect to a logout page or clear session data

    // Redirect to logout page
    window.location.href = "registration.html";
  });

  

