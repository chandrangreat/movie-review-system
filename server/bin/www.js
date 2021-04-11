const app = require('../app');
const db = require('../db');

const PORT = process.env.PORT || 3001;

const httpServer = require('http').createServer(app);

db.createMongoConnection();
const database = db.getMongoConnection();

database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', function () {
  console.log('Connected to MongDB instance');
});

httpServer.listen(PORT, () => {
  console.log(`Server Listening on localhost port ${PORT}`);
});
