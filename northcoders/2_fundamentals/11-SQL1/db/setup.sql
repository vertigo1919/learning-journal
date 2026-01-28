-- Purpose: creates a development and a test database
-- Notes: an idempotent reset is performed to ensure an idempotent initialisation is possible

\echo '>>>>>>> Resetting nc_bookshop dev and test DBs...'
DROP DATABASE IF EXISTS nc_bookshop_development;
DROP DATABASE IF EXISTS nc_bookshop_test;
CREATE DATABASE nc_bookshop_development;
CREATE DATABASE nc_bookshop_test;

-- SETUP DEVELOPMENT ENVIROMENT (Structure + Data)

\echo '>>>>>>> ⚙️ Connecting to database (dev)...'
\c nc_bookshop_development

\echo '>>>>>>> ⚙️ Creating tables (dev)...'
\i ./db/schema.sql

\echo '>>>>>>> ⚙️ Populating tables (dev)...'
\i ./db/seeds.sql

-- SETUP TEST ENVIROMENT (Structure only)
\echo '>>>>>>> ⚙️ Connecting to database (test)...'
\c nc_bookshop_test

\echo '>>>>>>> ⚙️ Creating tables (test)...'
\i ./db/schema.sql

\echo '💪 >>>>>>> Success! Setup of nc_bookshop dev and test DBs completed :)'
