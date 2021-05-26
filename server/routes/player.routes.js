const PlayerController = require('../controllers/player.controller');


module.exports = (app) => {
  // CREATE
  app.post('/api/player', PlayerController.createPlayer);
  // READ ALL
  app.get('/api/player', PlayerController.findAllPlayers);
  // READ ONE
  app.get('/api/player/:id', PlayerController.findOnePlayer);
  // UPDATE
  app.put('/api/player/:id', PlayerController.updatePlayer);
  // DELETE
  app.delete('/api/player/:id', PlayerController.deletePlayer);
};