import { ExecException, exec } from 'child_process';

type ExecuteShellScript = {
  scriptPath: string;
  scriptArgs: string | string[];
};

type ReturnOfShellScriptExecution = {
  error?: string | ExecException;
  message?: string;
};

export async function executeShellScript(
  args: ExecuteShellScript
): Promise<ReturnOfShellScriptExecution> {
  const { scriptPath, scriptArgs } = args;
  const scriptCommand = `${scriptPath} ${
    typeof scriptArgs === 'string' ? scriptArgs : scriptArgs.join(' ')
  }`;

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
