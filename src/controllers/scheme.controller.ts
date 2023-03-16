import { Request, Response } from 'express';
import { spawn } from 'child_process';

import SchemaRepository from '@repositories/scheme.repository';
import { executeShellScript } from 'utils/executeShellScript';

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

      await executeShellScript(scriptPath, scriptArgs)
        .then((result) => res.status(200).json({ message: result }))
        .catch(() => {
          throw new Error('New error');
        });

      res.status(200).json({ message: 'Script was successfully ended' });
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

export default SchemeController;
