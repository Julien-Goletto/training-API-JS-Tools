-- Deploy training_API_scripts:version_2 to pg

BEGIN;

INSERT INTO "movie" ("title") VALUES
('Les Chaussons Rouges'),
('Stalker'),
('Ultimatum'),
('The Rover');

COMMIT;
