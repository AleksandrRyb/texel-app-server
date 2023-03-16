import { exec } from 'child_process';

export async function executeShellScript(
  scriptPath: string,
  scriptArgs: string[]
): Promise<{ [key: string]: string }> {
  const scriptCommand = `${scriptPath} ${scriptArgs.join(' ')}`;

  return await new Promise<{ [key: string]: string }>((resolve, reject) => {
    exec(scriptCommand, (error, stdout, stderr) => {
      if (error) {
        reject({ error: error });
      }

      if (stderr) {
        reject({ error: stderr });
      }

      resolve({ message: stdout });
    });
  });
}
