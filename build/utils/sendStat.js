"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var dateFormat = require('dateformat');
var replaceall = require("replaceall");

var sendStat = exports.sendStat = function sendStat(data) {
    var text = data.detailInfo.map(function (el) {
        return "\n<tr>\n<td>" + dateFormat(new Date(el.date), "yyyy-mm-dd HH:MM:ss") + "</td>\n<td>" + el.rate + "</td>\n<td>" + el.comment + "</td>\n</tr>";
    });

    text = replaceall(",", "", text.toString());

    return "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>STAT</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n</head>\n<body>\n<h1>STATISTIC</h1>\n<h2>DEPARTMENT = " + data.name + "</h2>\n<h2>RATING = " + data.rate + "</h2>\n<h2>COUNT = " + data.count + "</h2>\n<br>\n<h2>Detailed</h2>\n\n<table class=\"table\">\n    <thead>\n    <tr>\n        <th>DATE</th>\n        <th>RATE</th>\n        <th>COMMENT</th>\n    </tr>\n    </thead>\n    <tbody>\n " + text + "    </tbody>\n    </table>\n\n    </body>\n    </html>";
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(sendStat, "sendStat", "server/utils/sendStat.js");
}();

;
//# sourceMappingURL=sendStat.js.map