\echo '>>>>>>> Creating Database bookshop_db...'
DROP DATABASE IF EXISTS bookshop_db;
CREATE DATABASE bookshop_db;

\echo '>>>>>>> ⚙️ Connecting to database...'
\c bookshop_db

\echo '>>>>>>> ⚙️ Creating tables...'
\i ./db/schema.sql

\echo '>>>>>>> ⚙️ Populating tables'
\i ./db/seeds.sql

\echo '💪 >>>>>>> Success! Setup completed :)'
