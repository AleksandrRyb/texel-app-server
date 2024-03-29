import { Router } from 'express';

import SchemeController from '@controllers/scheme.controller';

class SchemeRoutes {
  public router: Router;
  controller: SchemeController;

  constructor() {
    this.router = Router();
    this.controller = new SchemeController();
    this.initRoutes();
  }

  initRoutes() {
    this.router.get('/config', this.controller.getScheme);
    this.router.post('/run', this.controller.postScheme);
  }
}

export default SchemeRoutes;
