import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const paths: string = core.getInput('paths');
    const PATH = process.env.PATH;

    core.exportVariable("PATH", `${PATH}:${paths}`);
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
