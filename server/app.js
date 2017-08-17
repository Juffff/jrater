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
import {sendStat} from './utils/sendStat';

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

import createItems from './utils/createItems';

// Connect to DB
db.connect();
createItems(db);


// Create and start server
const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));


app.post('/updateRate', (req, res) => {
    if(req.body.text === ''){console.log('empty')}
    db.updateItem(req.body.department, req.body.rating, req.body.text);
});

app.get('/admin', (req, res) => {
    db.listItems({name: 'Secretary'}).then(data => {
        res.send(sendStat(data[0]));
    });
});



app.listen(serverPort, () => {
    console.log(`Server is running on ${serverPort}`);
});
