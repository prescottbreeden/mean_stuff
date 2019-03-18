const controller = require('./controllers.js');

module.exports = function(app) {

  app
    .get('/', controller.home)
    .post('/message', controller.newMessage)
    .post('/comment', controller.newComment)
    .all('*', controller.error)
}