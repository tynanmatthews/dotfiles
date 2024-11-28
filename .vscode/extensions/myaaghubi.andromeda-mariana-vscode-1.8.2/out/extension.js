"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
async function activate(context) {
    await removeOldVersionAfterMigration();
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
async function removeOldVersionAfterMigration() {
    // let oldExists = vscode.commands.executeCommand('workbench.extensions.search', 'myaghobi.andromeda-mariana');
    let uninstallOld = vscode.commands.executeCommand('workbench.extensions.uninstallExtension', 'myaghobi.andromeda-mariana');
    await Promise.all([uninstallOld]);
}
//# sourceMappingURL=extension.js.map