const controller = require('./controllers.js');

module.exports = function(app) {

  app
    .get('/', controller.home)
    .get('/api/message', controller.getAll)
    .post('/api/message', controller.newMessage)
    .post('/api/comment', controller.newComment)
    .all('*', controller.error)
}