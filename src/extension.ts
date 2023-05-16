// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "endurance" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('endurance.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from endurance!');
	});

	// Definir o snippet
	const snippet = new vscode.SnippetString(`
⚓️
// Código do bloco aqui
// Mais código do bloco
⚓️
`);

	// Registrar o comando e associá-lo a um atalho de teclado
	context.subscriptions.push(
		vscode.commands.registerCommand('endurance.startBlock', () => {
			// Inserir o snippet no editor ativo
			vscode.window.activeTextEditor?.insertSnippet(snippet);
		})
	);

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
