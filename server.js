const express = require('express');
const path = require('path');

const app = express();
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

const http = require('http').createServer(app);
let version = '0.4';

app.use(express.static(path.join(__dirname, './dist')));

http.listen(process.env.port, () => {
  console.log(`Server.js Build: ${version}`);
  console.log(`Server running on http://localhost:${process.env.port}`);
  console.log(' ');
});
