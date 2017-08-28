'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _dbutils = require('./utils/dbutils');

var db = _interopRequireWildcard(_dbutils);

var _config = require('./config/config.json');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _sendStat = require('./utils/sendStat');

var _createItems = require('./utils/createItems');

var _createItems2 = _interopRequireDefault(_createItems);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Connect to DB
db.connect();
(0, _createItems2.default)(db);

// Create and start server
var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)(corsOptions));

app.post('/updateRate', function (req, res) {
  db.updateItemRate(req.body.department, req.body.rating).then(function (data) {
    return res.send(data.toString());
  });
});

app.post('/sendComment', function (req, res) {
  db.addItemComment(req.body.department, req.body.count, req.body.text);
  console.log(req.body);
});

app.get('/admin', function (req, res) {
  db.listItems({ name: 'Secretary' }).then(function (data) {
    res.send((0, _sendStat.sendStat)(data[0]));
  });
});

app.get('/', function (req, res) {
  res.send('OK');
});

app.listen(_config.serverPort, function () {
  console.log('Server is running on ' + _config.serverPort);
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(corsOptions, 'corsOptions', 'server/app.js');

  __REACT_HOT_LOADER__.register(app, 'app', 'server/app.js');
}();

;
//# sourceMappingURL=app.js.map