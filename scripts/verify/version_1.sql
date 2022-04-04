-- Verify training_API_scripts:version_1 on pg

BEGIN;

SELECT "id","title","createdAt","updatedAt" FROM "movie";

ROLLBACK;
