import * as vscode from "vscode";
import { EnduranceHoverProvider } from "./hover";

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

  const provider = new EnduranceHoverProvider();
  context.subscriptions.push(
    vscode.languages.registerHoverProvider("endurance", provider)
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
