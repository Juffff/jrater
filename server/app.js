/*
 * Steps
 1. init
 2. express
 3. babel sudo npm i -g babel-cli
 4. mongo
 tar -zxvf mongodb-osx-ssl-x86_64-3.4.5.tgz
 mkdir -p /Users/Juff/Documents/mongodb
 cp -R -n mongodb-osx-x86_64-3.4.5/ /Users/Juff/Documents/mongodb/
 export PATH=/Users/Juff/Documents/mongodb/bin:$PATH
 mkdir -p /Users/Juff/Documents/mongodb/data/db/
 mongod --dbpath /Users/Juff/Documents/mongodb/data/db/
 robomongo
 mongoose
 5. body-parser

 */


import express from 'express';
import bodyParser from 'body-parser';
import * as db from './utils/dbutils';
import {serverPort} from './config/config.json';
import cors from 'cors';

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Fake db fill TODO:// kill it!
import fakeitems from './utils/createFakeDbItems';

// Connect to DB
db.connect();
fakeitems(db);


// Create and start server
const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));

// Items API

app.get('/items', (req, res) => {
    db.listItems().then(data => res.send(data));
});

app.post('/getRate', (req, res) => {
    const department = req.body.value;
    db.listItems({name: department}).then(data => res.send(data))

});

app.post('/updateRate', (req, res) => {
    console.log(req.body);
    db.updateItem(req.body.id, req.body.rating);

/*    const department = req.body.value;
    db.listItems({name: department}).then(data => res.send(data))*/

});


app.delete('/items:id', (req, res) => {
    db.deleteItem(req.params.id).then(data => res.send(data));
});


app.listen(serverPort, () => {
    console.log(`Server is running on ${serverPort}`);
});
