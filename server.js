const express = require('express');
const serveStatic = require('serve-static');

const path = require('path');

const app = express();
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

const http = require('http').createServer(app);
let version = '0.4';

app.use(serveStatic(path.join(__dirname, './dist')));

http.listen(process.env.PORT, () => {
  console.log(`Server.js Build: ${version}`);
  console.log(`Server running on http://localhost:${process.env.PORT}`);
  console.log(' ');
});
