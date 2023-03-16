import { Request, Response } from 'express';
import { spawn } from 'child_process';

import SchemaRepository from '@repositories/scheme.repository';

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

      const scriptProcess = spawn(scriptPath, scriptArgs);

      scriptProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      scriptProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
        res.status(500).json({ error: true, message: data });
      });

      scriptProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
      });

      res.status(200).json({ message: 'Script was successfully ended' });
    } catch (error) {
      console.error(error);
      res.status(400).json(error);
    }
  }
}

export default SchemeController;
