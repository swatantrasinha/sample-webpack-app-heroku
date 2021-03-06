const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
console.log('__dirname is : ', __dirname);
app.use(favicon(__dirname + '/public/favicon.png'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
console.log('__dirname ==>> ',  __dirname);
// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/dist', 'index.html'));
});

app.listen(port);
