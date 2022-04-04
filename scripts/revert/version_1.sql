-- Revert training_API_scripts:version_1 from pg

BEGIN;

DROP TABLE "movie";

COMMIT;
