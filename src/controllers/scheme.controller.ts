import { Request, Response } from 'express';

import SchemaRepository from '@repositories/scheme.repository';
import { executeShellScript } from '@services/execute-shell-script';

class SchemeController {
  public async getScheme(req: Request, res: Response) {
    try {
      const sr = new SchemaRepository();
      const schemeObj = sr.get();

      res.status(200).json(schemeObj);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  public async postScheme(req: Request, res: Response) {
    const { body } = req;
    try {
      const scriptArgs = Object.keys(body).map((key) => body[key]);
      const scriptPath = './scripts/start.sh';

      const result = await executeShellScript(scriptPath, scriptArgs);

      if (result.error) {
        throw new Error(result.error);
      }

      res.status(200).json({ message: result.message });
      res.end();
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

export default SchemeController;
