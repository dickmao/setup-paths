import * as core from '@actions/core'

async function run() {
    const osHomedir = require('os-homedir');
    try {
        const paths : string = core.getInput('paths').split(":").
              map(x => osHomedir() + "/" + x).join(":");
        const PATH = process.env.PATH;
        core.exportVariable("PATH", `${PATH}:${paths}`);
    } catch (error) {
        core.setFailed(error.message)
    }
}

run()
