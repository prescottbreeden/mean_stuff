const controllers = require('./controllers');
const path = require('path');

module.exports = app => {
  app
    .get('/api/superheros', controllers.getAllSuperHeros)
    .get('/api/superheros/:id', controllers.getOneSuperHeros)
    .post('/api/superheros', controllers.createSuperHero)
    .put('/api/superheros/:id', controllers.updateSuperHero)
    .delete('/api/superheros/:id', controllers.deleteSuperHero)
    .all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}