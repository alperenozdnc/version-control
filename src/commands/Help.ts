import { Command } from "../interfaces";

export function Help(commands: Command[]) {
    const REPO_URL = "https://github.com/alperenozdnc/version-control";
    const LICENSE_URL = "https://www.gnu.org/licenses/gpl-3.0.en.html";

    console.log("Usage: veco [COMMAND]... [OPTIONS]...");
    console.log("A basic and archaic version control program.\n")

    for (const command of commands) {
        const callers: string = command.callers.join(", ");

        console.log("  ", callers, "  ->  ", command.description);
    }

    console.log(`\nFor online documentation: <${REPO_URL}>`);
    console.log(`For seeing the license: <${LICENSE_URL}>`)
}
