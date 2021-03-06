const userControllerMethods = require ('../controllers/userControllers');
const postControllerMethods = require ('../controllers/postControllers');

const middleware = require('../middlewares/middleware');

module.exports = (app) => {
  app.route('/new-user').post(middleware.hashPassword, userControllerMethods.createUser);
  app.route('/login').post(middleware.authenticate, userControllerMethods.login);
  app.route('/users').get(userControllerMethods.users);
  app.route('/users/:id').get(userControllerMethods.userById);
  app.route('/users/:id/pic').get(userControllerMethods.userPicById);
  app.route('/users/:id').delete(userControllerMethods.deleteUser);
  //app.route('/users/:id').put(userControllerMethods.updateProfile);
  app.route('/posts').post(postControllerMethods.createPost);
  app.route('/posts/:id').get(postControllerMethods.userPosts);
  //in the line above, "id" refers to a user ID in mongoDB
  app.route('/posts/:id').delete(postControllerMethods.deletePost);
  //in the line above, "id" refers to a post ID in mongoDB
  app.route('/posts/:id').post(postControllerMethods.addComment);
  //in the line above, "id" refers to a post ID in mongoDB
  app.route('/comments/:id').delete(postControllerMethods.deleteComment);
  //in the line above, "id" refers to the comment ID in mongoDB
};