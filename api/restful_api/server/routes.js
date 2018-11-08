const controllers = require('./controllers');

module.exports = app => {
  app
    .get('/hi', controllers.home)
    .get('/users', controllers.allUsers)
    .get('/users/:id', controllers.oneUser)
    .post('/users', controllers.newUser)
    .put('/users/:id', controllers.updateUser)
    .delete('/users/:id', controllers.deleteUser)
    .get('/', controllers.error)
}

