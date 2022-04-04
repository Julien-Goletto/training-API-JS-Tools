-- Verify training_API_scripts:version_2 on pg

BEGIN;

SELECT "title" FROM "movie" WHERE "title"='Stalker';

ROLLBACK;
