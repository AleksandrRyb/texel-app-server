import { exec } from 'child_process';

export async function executeShellScript(
  scriptPath: string,
  scriptArgs: string[]
): Promise<string> {
  const scriptCommand = `${scriptPath} ${scriptArgs.join(' ')}`;

  return new Promise<string>((resolve, reject) => {
    exec(scriptCommand, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      }

      if (stderr) {
        reject(stderr);
      }

      resolve(stdout);
    });
  });
}
