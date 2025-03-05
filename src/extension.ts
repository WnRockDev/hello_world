import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {
	vscode.window.setStatusBarMessage("Hello, world!");

	context.subscriptions.push(vscode.commands.registerCommand('say-hello-world.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from Hello World!');
	}));

	context.subscriptions.push(vscode.commands.registerCommand('say-hello-world.helloFile', (uri: vscode.Uri) => {
		vscode.window.showInformationMessage(`Hello from ${uri ? uri.path : 'Null'}`);
	}));
}

export function deactivate() { }
