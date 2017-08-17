const dateFormat = require('dateformat');
const replaceall = require("replaceall");


export const sendStat = data => {
    let text = data.detailInfo.map(el => {
        return (`
<tr>
<td>${dateFormat(new Date(el.date), "yyyy-mm-dd HH:MM:ss")}</td>
<td>${el.rate}</td>
<td>${el.comment}</td>
</tr>`);
    });

    text = replaceall(",","",text.toString());

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>STAT</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
<h1>STATISTIC</h1>
<h2>DEPARTMENT = ${data.name}</h2>
<h2>RATING = ${data.rate}</h2>
<h2>COUNT = ${data.count}</h2>
<br>
<h2>Detailed</h2>

<table class="table">
    <thead>
    <tr>
        <th>DATE</th>
        <th>RATE</th>
        <th>COMMENT</th>
    </tr>
    </thead>
    <tbody>
 ${
    
text

    }    </tbody>
    </table>

    </body>
    </html>`};
