const express = require('express');
const app = express();
const path = require('path');

// viewed at http://localhost:8080
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
