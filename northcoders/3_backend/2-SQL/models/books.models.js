const db = require("../db/connection");

console.log("We are connected to this pg databse: ", process.env.PGDATABASE);

exports.deleteBooksByAuthor = (author) => {
  return db
    .query(
      `DELETE FROM books WHERE author_id IN(SELECT author_id FROM authors WHERE author_name = $1) RETURNING *`,
      [author]
    )
    .then(({ rows }) => rows);
};
