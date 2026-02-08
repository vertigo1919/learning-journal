const Books = require("./models/books.models.js");
//const Authors = require("./models/authors.models.js");
const db = require("./db/connection");

async function runModels() {
  try {
    const author = "Margaret Atwood";
    console.log(`Attempting to delete books by ${author}...\n`);
    const deletedBooks = await Books.deleteBooksByAuthor(author);
    if (deletedBooks.length === 0) console.log("No books found");
    else {
      console.log("Deletion successful, the following records were deleted:");
      console.table(deletedBooks);
    }
  } catch (err) {
    console.log("Deletion failed", err.message);
  }

  try {
    const book = "A Brief History of Time";

    const bookDetails = await Books.getBooksDetail(book);
    console.log("Attempting to increase price for the following book...:");
    console.table(bookDetails);
    const updatedBook = await Books.changePrice(book, 9.99);
    if (updatedBook.length === 0) console.log("Book not found");
    else {
      console.log("Price update successful as per the below:");
      console.table(updatedBook);
    }
  } catch (err) {
    console.log("Update failed", err.message);
  }
  db.end();
  console.log("\nPool connetion closed as this is not a server!");
}
runModels();
