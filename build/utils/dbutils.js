'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.connect = connect;
exports.listItems = listItems;
exports.createItem = createItem;
exports.deleteItem = deleteItem;
exports.updateItemRate = updateItemRate;
exports.addItemComment = addItemComment;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

require('../models/RateItem');

var _config = require('../config/config.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RateItem = _mongoose2.default.model('RateItem');

function connect() {
    // mongoose.connect(`mongodb://${db.host}:${db.port}/${db.name}`);
    _mongoose2.default.connect('mongodb://juff:Splurgeola4848@ds161913.mlab.com:61913/heroku_s02vjssr');
    _mongoose2.default.set("debug", true);
}

function listItems(filter) {
    return RateItem.find(filter);
}

function createItem(data) {
    var rateItem = new RateItem({
        name: data.name,
        rate: data.rate,
        count: data.count,
        description: data.description
    });

    return rateItem.save();
}

function deleteItem(id) {
    return RateItem.findById(id).remove();
}

function updateItemRate(department, rate) {

    return new _promise2.default(function (resolve, reject) {
        RateItem.findOne({ name: department }, function (err, rateItem) {
            if (err) return console.log(err);
            rateItem.rate = (rateItem.rate * rateItem.count + rate) / (rateItem.count + 1);
            rateItem.count += 1;
            rateItem.detailInfo = rateItem.detailInfo.concat({
                count: rateItem.count,
                date: Date.now(),
                rate: rate
            });
            rateItem.save();
        }).then(function (data) {

            resolve(data.detailInfo.length);
        });
    });
}

function addItemComment(department, count, text) {
    if (text === undefined) text = 'No comments';
    RateItem.findOne({ name: department }, function (err, rateItem) {
        var newData = (0, _assign2.default)([], rateItem.detailInfo);
        newData[count] = (0, _assign2.default)({}, newData[count], { comment: text });
        rateItem.detailInfo = newData;
        rateItem.save();
    });
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(RateItem, 'RateItem', 'server/utils/dbutils.js');

    __REACT_HOT_LOADER__.register(connect, 'connect', 'server/utils/dbutils.js');

    __REACT_HOT_LOADER__.register(listItems, 'listItems', 'server/utils/dbutils.js');

    __REACT_HOT_LOADER__.register(createItem, 'createItem', 'server/utils/dbutils.js');

    __REACT_HOT_LOADER__.register(deleteItem, 'deleteItem', 'server/utils/dbutils.js');

    __REACT_HOT_LOADER__.register(updateItemRate, 'updateItemRate', 'server/utils/dbutils.js');

    __REACT_HOT_LOADER__.register(addItemComment, 'addItemComment', 'server/utils/dbutils.js');
}();

;
//# sourceMappingURL=dbutils.js.map