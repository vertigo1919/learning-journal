-- Purpose: Inserts predictable seed data for local development
-- Notes: dataset provided by Northcoders, intentionally small

-- 1) TRUNCATION
/* The truncation below is not strictly necessary as tables are dropped by the schema
 Leaving it here on the offchance this file is run on its own */
TRUNCATE TABLE books, authors, genres RESTART IDENTITY CASCADE;

-- 2) POPULATE BOOKS
INSERT INTO books (
        title,
        price,
        quantity_in_stock,
        release_date,
        is_fiction
    )
VALUES (
        'The Hitchhiker''s Guide to the Galaxy',
        8.99,
        560,
        '1997-10-12',
        'true'
    ),
    (
        'The Little Prince',
        6.99,
        1020,
        '1943-04-06',
        'true'
    ),
    (
        'The Tale of Peter Rabbit',
        5.99,
        1000,
        '1902-10-01',
        'true'
    ),
    (
        'Emma',
        5.22,
        390,
        '1815-12-23',
        'true'
    ),
    (
        'Nineteen Eighty-Four: A Novel',
        7.9,
        420,
        '1949-06-08',
        'true'
    ),
    (
        'The Handmaid''s Tale',
        8.99,
        10,
        '1985-08-01',
        'true'
    ),
    (
        'The War of the Worlds',
        2.50,
        17,
        '1897-04-01',
        'true'
    ),
    (
        'Captain Corelli''s Mandolin',
        9.99,
        0,
        '1995-08-29',
        'true'
    ),
    (
        'A Brief History of Time',
        8.25,
        0,
        '1988-04-01',
        'false'
    ),
    (
        'Pride and Prejudice',
        6.99,
        4,
        '1813-01-28',
        'true'
    );

-- 3) POPULATE AUTHORS
INSERT INTO authors (
        author_name,
        trivia
    )
VALUES (
        'Dan Brown',
        'Favourite colour is not brown.' 
    ),
   (
        'Antoine de Saint-Exupéry',
        'He was a successful commercial pilot before World War II, working airmail routes in Europe, Africa, and South America.' 
    ),
    (
        'Douglas Adams',
        'He made two appearances in Monty Python''s Flying Circus.' 
    ),
    (
        'Stephen Hawking',
        'Doctors told him he wouldn''t live past his early 20s.' 
    ),

    (
        'Eric Carle',
        'When he was a young boy, Carle had a dream that he would build a bridge from Germany to America.' 
    ),
    (
        'J. D. Salinger',
        'The Catcher in the Rye was the only novel that J.D. Salinger published during his lifetime - not bad for a first try!' 
    ),
    (
        'Beatrix Potter',
        'Between 1881 and 1897 Potter kept a journal in which she jotted down her private thoughts in a secret code . This code was so fiendishly difficult it was not cracked and translated until 1958.' 
    ),
    (
        'C. S. Lewis',
        'Lewis set up a charitable trust to give away whatever money he received from his books.' 
    ),
    (
        'Roald Dahl',
        'During World War II he passed intelligence to MI6 from Washington.' 
    ),
    (
        'Frank Herbert',
        'While conversing with fungi expert Paul Stamets, Herbert revealed that the world of Dune was influenced by the lifecycle of mushrooms, with his imagination being helped along by a more "magic" variety.' 
    ),
    (
        'Louis de Bernières',
        'De Bernières is an avid musician who plays flute, mandolin, clarinet and guitar.' 
    ),
        (
        'H. G. Wells',
        'In 1914 H.G. Wells published a novel titled The World Set Free. In this book he described a weapon that was eerily similar to the first atomic bomb unleashed on the Japanese cities of Hiroshima and Nagasaki in 1945.' 
    ),
        (
        'George Orwell',
        'Orwell intentionally got himself arrested for being "drunk and incapable".' 
    ),
        (
        'Jane Austen',
        'The author of her first novel, Sense and Sensibility, was simply "A Lady", and her later works like Pride and Prejudice were credited to "the Author of Sense and Sensibility". She wasn''t named as the author of her novels until after her death!' 
    ),
        (
        'Margaret Atwood',
        'Atwood was the first author to contribute to The Future Library Project, which will take one writer''s contribution each year for one hundred years to be printed in the year 2114.' 
    );


-- 4) ASSIGN AUTHORS TO BOOKS

/* 4A MANUALLY:
UPDATE books
SET author_id = 3
WHERE title = 'The Hitchhiker''s Guide to the Galaxy'; 
*/

/* 4B Using CASE:
UPDATE books
SET author_id = CASE title
    WHEN 'The Hitchhiker''s Guide to the Galaxy' THEN 3
    WHEN 'The Little Prince' THEN 2
    WHEN 'Emma' THEN 14
    WHEN 'Nineteen Eighty-Four: A Novel' THEN 13
    -- Add more as needed
END
WHERE title IN ('The Hitchhiker''s Guide to the Galaxy', 'The Little Prince', 'Emma', 'Nineteen Eighty-Four: A Novel');
*/
-- 4C Using SUBQUERIES: 

UPDATE books
SET author_id = (
        SELECT author_id
        FROM authors
        WHERE author_name = 'Douglas Adams'
    )
WHERE title = 'The Hitchhiker''s Guide to the Galaxy';
UPDATE books
SET author_id = (
        SELECT author_id
        FROM authors
        WHERE author_name = 'Antoine de Saint-Exupéry'
    )
WHERE title = 'The Little Prince';
UPDATE books
SET author_id = (
        SELECT author_id
        FROM authors
        WHERE author_name = 'Beatrix Potter'
    )
WHERE title = 'The Tale of Peter Rabbit';
UPDATE books
SET author_id = (
        SELECT author_id
        FROM authors
        WHERE author_name = 'Jane Austen'
    )
WHERE title = 'Emma';
UPDATE books
SET author_id = (
        SELECT author_id
        FROM authors
        WHERE author_name = 'George Orwell'
    )
WHERE title = 'Nineteen Eighty-Four: A Novel';
UPDATE books
SET author_id = (
        SELECT author_id
        FROM authors
        WHERE author_name = 'Margaret Atwood'
    )
WHERE title = 'The Handmaid''s Tale';
UPDATE books
SET author_id = (
        SELECT author_id
        FROM authors
        WHERE author_name = 'H. G. Wells'
    )
WHERE title = 'The War of the Worlds';
UPDATE books
SET author_id = (
        SELECT author_id
        FROM authors
        WHERE author_name = 'Jane Austen'
    )
WHERE title = 'Pride and Prejudice';
UPDATE books
SET author_id = (
        SELECT author_id
        FROM authors
        WHERE author_name = 'Louis de Bernières'
    )
WHERE title = 'Captain Corelli''s Mandolin';
UPDATE books
SET author_id = (
        SELECT author_id
        FROM authors
        WHERE author_name = 'Stephen Hawking'
    )
WHERE title = 'A Brief History of Time';

-- 5) POPULATE EXTRA_BOOKS
INSERT INTO extra_books(
        title,
        price,
        quantity_in_stock,
        release_date,
        is_fiction
    ) VALUES (
        'The Hitchhiker''s Guide to the Galaxy',
        8.99,
        560,
        '1997-10-12',
        true
    ),
    (
        'The Little Prince',
        6.99,
        1020,
        '1943-04-06',
        true
    ),
    (
        'Pride and Prejudice',
        6.99,
        4,
        '1813-01-28',
        true
    ),
    (
        'Pride and Prejudice',
        6.99,
        12,
        '1813-01-28',
        true
    ),
    (
        'Pride and Prejudice',
        6.99,
        2,
        '1813-01-28',
        true
    ),
    (
        'Pride and Prejudice',
        6.99,
        8,
        '1813-01-28',
        true
    );


-- 5) POPULATE EXTRA_BOOKS

INSERT INTO genres (genre_name) VALUES ('science fiction'), ('children''s'), ('romance'), ('fantasy'), ('dystopian'), ('science'), ('adventure'), ('classics');

-- 6) POPULATE JUNCTION TABLE book_genres

INSERT INTO book_genres (book_id, genre_id)
VALUES (1, 1),
    -- Hitchhiker's Guide -> Science Fiction
    (1, 7),
    -- Hitchhiker's Guide -> Adventure
    (1, 8),
    -- Hitchhiker's Guide -> Classics
    (2, 2),
    -- The Little Prince -> Children's
    (2, 4),
    -- The Little Prince -> Fantasy
    (2, 8),
    -- The Little Prince -> Classics
    (3, 2),
    -- Peter Rabbit -> Children's
    (3, 8),
    -- Peter Rabbit -> Classics
    (4, 3),
    -- Emma -> Romance
    (4, 8),
    -- Emma -> Classics
    (5, 1),
    -- 1984 -> Science Fiction
    (5, 5),
    -- 1984 -> Dystopian
    (5, 8),
    -- 1984 -> Classics
    (6, 1),
    -- Handmaid's Tale -> Science Fiction
    (6, 5),
    -- Handmaid's Tale -> Dystopian
    (6, 8),
    -- Handmaid's Tale -> Classics
    (7, 1),
    -- War of the Worlds -> Science Fiction
    (7, 7),
    -- War of the Worlds -> Adventure
    (7, 8),
    -- War of the Worlds -> Classics
    (10, 3),
    -- Pride & Prejudice -> Romance
    (10, 8),
    -- Pride & Prejudice -> Classics
    (8, 3),
    -- Captain Corelli's Mandolin -> Romance
    (8, 8),
    -- Captain Corelli's Mandolin -> Classics
    (9, 6),
    -- Brief History of Time -> Science
    (9, 8);
    -- Brief History of Time -> Classics;