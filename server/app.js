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

import createItems from './utils/createItems';

// Connect to DB
db.connect();
createItems(db);


// Create and start server
const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));

// Items API

/*app.get('/items', (req, res) => {
    db.listItems().then(data => res.send(data));
});*/
/*

app.post('/getRate', (req, res) => {
    const department = req.body.value;
    db.listItems({name: department}).then(data => res.send(data))

});
*/

app.post('/updateRate', (req, res) => {
    console.log(req.body);
    db.updateItem(req.body.department, req.body.rating);
});

app.get('/thnk', (req, res) => {
res.send(`
<h1>Спасибо за Ваш голос!</h1>
<h2><a href="http://localhost:8090">Назад</a></h2>
`);
});

app.listen(serverPort, () => {
    console.log(`Server is running on ${serverPort}`);
});
