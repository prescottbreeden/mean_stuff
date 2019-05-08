const controllers = require('./controllers');

module.exports = app => {
  app
    .get('/api/superheros', controllers.getAllSuperHeros)
    .get('/api/superheros/:id', controllers.getOneSuperHeros)
    .post('/api/superheros', controllers.createSuperHero)
    .put('/api/superheros/:id', controllers.updateSuperHero)
    .delete('/api/superheros/:id', controllers.deleteSuperHero);
}