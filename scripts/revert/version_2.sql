-- Revert training_API_scripts:version_2 from pg

BEGIN;

DELETE FROM "movie";

COMMIT;
