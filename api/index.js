import Express from 'express';
import router from './router.js';
import controlers from './controlers/index.js';
import repositories from './repositories/index.js';
import models from './models/index.js';

const launch = (apiPort) => {
  const app = new Express();
  app.use(Express.json());

  router(controlers(repositories(models)), app);

  app.listen(apiPort);

  console.log(`API server listening on port ${apiPort}...`);

  // For testing purposes
  return app;
};

export default { launch };
