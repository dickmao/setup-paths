import * as core from '@actions/core'
import { homedir } from "os";

async function run() {
    try {
        const home = homedir();
        const paths : string = core.getInput('paths').split(":").
              map(x => homedir + "/" + x).join(":");
        const PATH = process.env.PATH;
        core.exportVariable("PATH", `${PATH}:${paths}`);
    } catch (error) {
        core.setFailed(error.message)
    }
}

run()
