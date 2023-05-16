import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "endurance" is now active!');

  let disposable = vscode.commands.registerCommand(
    "endurance.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World from endurance!");
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
