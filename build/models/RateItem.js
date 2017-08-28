'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var RateItemSchema = new Schema({
  name: String,
  rate: Number,
  count: Number,
  description: String,
  detailInfo: Array
});
var RateItem = _mongoose2.default.model('RateItem', RateItemSchema);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Schema, 'Schema', 'server/models/RateItem.js');

  __REACT_HOT_LOADER__.register(RateItemSchema, 'RateItemSchema', 'server/models/RateItem.js');

  __REACT_HOT_LOADER__.register(RateItem, 'RateItem', 'server/models/RateItem.js');
}();

;
//# sourceMappingURL=RateItem.js.map