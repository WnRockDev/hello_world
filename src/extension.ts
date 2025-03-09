import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {
	let statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);

	const updateStatusBarItem = () => {
		const config = vscode.workspace.getConfiguration("helloWorld");
		let showStatusBarMessage = config.get("showStatusBarMessage", true);
		let statusBarText = config.get("statusBarText", "Hello, world!");

		statusBarItem.text = statusBarText;
		showStatusBarMessage ? statusBarItem.show() : statusBarItem.hide();
	};

	updateStatusBarItem();

	vscode.workspace.onDidChangeConfiguration(e => {
		if (e.affectsConfiguration("helloWorld.showStatusBarMessage") || e.affectsConfiguration("helloWorld.statusBarText")) {
			updateStatusBarItem();
		}
	});

	context.subscriptions.push(vscode.commands.registerCommand('say-hello-world.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from Hello World!');
	}));

	context.subscriptions.push(vscode.commands.registerCommand('say-hello-world.helloFile', (uri: vscode.Uri) => {
		vscode.window.showInformationMessage(`Hello from ${uri ? uri.path : 'Null'}`);
	}));
}

export function deactivate() { }
