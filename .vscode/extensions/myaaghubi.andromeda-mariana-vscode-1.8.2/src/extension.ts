import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {
	await removeOldVersionAfterMigration();
}

export function deactivate() { }

async function removeOldVersionAfterMigration() {
		// let oldExists = vscode.commands.executeCommand('workbench.extensions.search', 'myaghobi.andromeda-mariana');
		let uninstallOld = vscode.commands.executeCommand('workbench.extensions.uninstallExtension', 'myaghobi.andromeda-mariana');
		await Promise.all([uninstallOld]);
}
