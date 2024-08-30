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
        this.updateOutput("Added: " + newBook.bio());
    },
    searchBooks: function(query) {
        let found = false;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title === query || this.books[i].author === query) {
                this.updateOutput("Found: " + this.books[i].bio());
                found = true;
            }
        }
        if (!found) {
            this.updateOutput("Book with query " + query + " is not found");
        }
    },
    updateOutput: function(text) {
        document.write(text + "<br/>");
    }
};

function displayBooks() {
    // Adding books to the library
    Library.addBook("The Great Gatsby", "F. Scott Fitzgerald");
    Library.addBook("To Kill a Mockingbird", "Harper Lee");
    Library.addBook("1984", "George Orwell");
    Library.addBook("Pride and Prejudice", "Jane Austen");
    Library.addBook("The Catcher in the Rye", "J.D. Salinger");

    // Demonstrating functionality
    Library.updateOutput("<br/>Searching for the book with author 'Harper Lee':");
    Library.searchBooks("Harper Lee");

    Library.updateOutput("<br/>Searching for the book with title 'The Great Gatsby':");
    Library.searchBooks("The Great Gatsby");

    Library.updateOutput("<br/>Searching for the book with title 'Design Thinking':");
    Library.searchBooks("Design Thinking");

    // Displaying all books in the library
    Library.updateOutput("<br/>These are the books in the library:");
    for (let i = 0; i < Library.books.length; i++) {
        Library.updateOutput((i + 1) + ". " + Library.books[i].bio());
    }
}

displayBooks();
