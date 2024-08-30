let book = {
    title: "",
    author: "",
    bio: function() {
        return this.title + " by " + this.author;
    }
};

let Library = {
    books: [],
    addBook: function(title, author) {
        let newBook = Object.create(book);
        newBook.title = title;
        newBook.author = author;
        this.books.push(newBook);
        document.write("Added: " + newBook.bio()+ "<br/>");
    },
    searchBooks: function(query) {
        let found = false;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === query || this.books[i].author === query) {
                document.write("Found: " + this.books[i].bio()+ "<br/>");
                found = true;
            }
        }
        if (!found) {
            document.write("Book with query " + query + " is not found"+ "<br/>");
        }
    },
};

function displayBooks() {
    // Adding books to the library
    Library.addBook("The Great Gatsby", "F. Scott Fitzgerald");
    Library.addBook("To Kill a Mockingbird", "Harper Lee");
    Library.addBook("1984", "George Orwell");
    Library.addBook("Pride and Prejudice", "Jane Austen");
    Library.addBook("The Catcher in the Rye", "J.D. Salinger");

    // Demonstrating functionality
    document.write("<br/>Searching for the book with author 'Harper Lee':</br>");
    Library.searchBooks("Harper Lee");

    document.write("<br/>Searching for the book with title 'The Great Gatsby':</br>");
    Library.searchBooks("The Great Gatsby");

    document.write("<br/>Searching for the book with title 'Design Thinking':</br>");
    Library.searchBooks("Design Thinking");

    // Displaying all books in the library
    document.write("<br/>These are the books in the library:</br>");
    for (let i = 0; i < Library.books.length; i++) {
        document.write((i + 1) + ". " + Library.books[i].bio()+ "<br/>");
    }
}

displayBooks();
