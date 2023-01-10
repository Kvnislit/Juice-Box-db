const express = require('express');
const app = express()
const pg = require('pg');
const client = new pg.Client('postgres://localhost/juice_box_db');
 
app.get('/api/juice', async (req, res, next) => {
    try{
    const response = await client.query('SELECT * FROM juice;');
    res.send(response.rows);
    }
    catch(ex){
    next(ex)
    }
});

const setup  = async ()=> {
try{
 await client.connect();
 const SQL = `DROP TABLE IF EXISTS juice;
 CREATE TABLE juice (
     id SERIAL PRIMARY KEY,
     name VARCHAR(50)
 );
 
 INSERT INTO juice( name) VALUES('foo');
 INSERT INTO juice( name) VALUES('bar');
 INSERT INTO juice( name) VALUES('bazz');
 INSERT INTO juice( name) VALUES('quq');
 `;
 await client.query(SQL);
 console.log('data is seeded');
 const port = process.env.PORT || 3000;
 app.listen(port, ()=> console.log(`listening on port ${port}`) )
}
catch(ex){
 console.log(ex)
}
}

setup();