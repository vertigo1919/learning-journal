const Books = require("./models/books.models.js");
//const Authors = require("./models/authors.models.js");
const db = require("./db/connection");

async function runModels() {
  const author = "Margaret Atwood";

  try {
    console.log(`Attempting to delete books by ${author}...\n`);
    const deletedBooks = await Books.deleteBooksByAuthor(author);
    if (deletedBooks.length === 0) console.log("No books found");
    else {
      console.log("Deletion successful, the following records were deleted:");
      console.table(deletedBooks);
    }
  } catch (err) {
    console.log("Deletion failed", err.message);
  } finally {
    db.end();
    console.log("\nPool connetion closed as this is not a server!");
  }
}

runModels();
