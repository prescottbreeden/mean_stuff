const controllers = require('./controllers');

module.exports = function (app) {

  app
    .get('/quotes', controllers.getAllQuotes)
    .post('/quotes', controllers.createQuote)
    .post('/quotes/:id', controllers.updateQuote)
}
