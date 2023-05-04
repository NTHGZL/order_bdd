
export default (controlers, app) => {
  app.get('/status', controlers.statusCtrl.getStatus);
  app.get('/recipes', controlers.recipeCtrl.listRecipes);
  app.post('/recipes', controlers.recipeCtrl.createRecipe);
  app.put('/recipes/:id', controlers.recipeCtrl.updateRecipe)
  app.delete('/recipes/:id', controlers.recipeCtrl.deleteRecipe)

  app.get('/users', controlers.userCtrl.getUsers);
  app.post('/users', controlers.userCtrl.createUser);
  app.put('/users/:id', controlers.userCtrl.updateUser);
  app.delete('/users/:id', controlers.userCtrl.deleteUser);

  app.get('/orders', controlers.orderCtrl.getOrders);
  app.post('/orders', controlers.orderCtrl.createOrder);
}
