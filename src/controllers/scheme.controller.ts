import { Request, Response } from 'express';

import { SchemaRepository } from '@repositories/scheme.repository';

class SchemeController {
  async getScheme(req: Request, res: Response) {
    try {
      const sr = new SchemaRepository();
      const schemeObj = sr.get();

      res.status(200).json(schemeObj);
    } catch (error) {
      res.status(500).json({ error: true, message: error.message });
    }
  }
}

export { SchemeController };
