DROP TABLE IF EXISTS juice;
CREATE TABLE juice (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO juice( name) VALUES('foo');
INSERT INTO juice( name) VALUES('bar');
INSERT INTO juice( name) VALUES('bazz');
INSERT INTO juice( name) VALUES('quq');


SELECT id, name 
FROM juice;