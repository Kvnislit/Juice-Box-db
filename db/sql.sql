DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO juice( name) VALUES('foo');
INSERT INTO juice( name) VALUES('bar');
INSERT INTO juice( name) VALUES('bazz');
INSERT INTO juice( name) VALUES('quq');
INSERT INTO juice( name) VALUES('pop');


SELECT id, name 
FROM users;