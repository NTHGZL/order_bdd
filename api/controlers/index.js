import statusCtrl from './statusCtrl.js';
import recipeCtrl from './recipeCtrl.js';
import userCtrl from './userCtrl.js';
import orderCtrl from './orderCtrl.js';

export default (repositories) =>  ({
  statusCtrl,
  recipeCtrl: recipeCtrl(repositories.recipeRepo),
  userCtrl: userCtrl(repositories.userRepo),
  orderCtrl: orderCtrl(repositories.orderRepo)
});
