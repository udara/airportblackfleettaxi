const express = require('express');
const path = require('path');
const app = express();
const PORT = 9000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/getuser', function(req, res) {
  // output userdata
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, ()=> console.log(`Listning to port ${PORT}`));