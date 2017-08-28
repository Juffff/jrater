'use strict';

module.exports = function (db) {
  // Create test Item
  db.listItems().then(function (data) {
    if (data.length === 0) {
      db.createItem({
        name: 'Secretary',
        rate: 0,
        count: 0,
        detailInfo: []
      });
    }
  });
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;
//# sourceMappingURL=createItems.js.map