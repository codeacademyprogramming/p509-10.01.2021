const form = document.querySelector('#book-form');

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
		  <td>${book.title}</td>
		  <td>${book.author}</td>
		  <td>${book.isbn}</td>
		  <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
		`;

    list.append(row);
  }
  static deleteBook(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.parentElement.remove();
    }
  }
  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.innerHTML = message;
    const container = document.querySelector('.container');
    container.insertBefore(div, form);

    // Remove alert after 1 second
    setTimeout(() => document.querySelector('.alert').remove(), 1000);
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
form.addEventListener('submit', (e) => {
  // Prevent actual submit and stop page reloading
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // Validate form fields
  if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Please fill in all fields!', 'danger');
  } else {
    const book = new Book(title, author, isbn);
    // Add Book to UI
    UI.addBookToList(book);
    // Add book to store
    Store.addBook(book);
    // Show success message
    UI.showAlert('Book added!', 'success');
    // Clear inputs
    UI.clearFields();
  }
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  e.preventDefault();
  // Remove book from UI
  UI.deleteBook(e.target);
  // Remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});
