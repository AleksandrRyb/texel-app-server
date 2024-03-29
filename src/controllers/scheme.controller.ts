import { Request, Response } from 'express';

import SchemaRepository from '@repositories/scheme.repository';
import { executeShellScript } from '@services/execute-shell-script';
import { removeNewlines } from '@utils/remove-newlines';
import { logger } from '@config/logger';

class SchemeController {
  public async getScheme(req: Request, res: Response) {
    try {
      const sr = new SchemaRepository();
      const schemeObj = sr.get();

      logger.info('getScheme: request to scheme was successfull');

      res.status(200).json(schemeObj);
    } catch (error) {
      logger.error(`getScheme: ${error}`);

      res.status(500).json(error);
    }
  }

  public async postScheme(req: Request, res: Response) {
    const { body } = req;
    try {
      const scriptArgs = Object.keys(body).map((key) => body[key]);
      const scriptPath = './scripts/start.sh';

      const result = await executeShellScript({ scriptPath, scriptArgs });

      if (result.error) {
        throw new Error(JSON.stringify(result.error));
      }

      logger.info(`postScheme: ${result.message}`);

      res
        .status(200)
        .json({ message: removeNewlines(result.message as string) });

      res.end();
    } catch (error) {
      logger.error(`postScheme: ${error}`);

      res.status(400).json(error);
    }
  }
}

export default SchemeController;
