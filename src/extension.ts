import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "endurance" is now active!');

  const fileIconTheme = vscode.extensions.getExtension("vscode.file-icons");

  if (fileIconTheme) {
    fileIconTheme.activate().then(() => {
      vscode.workspace.onDidChangeConfiguration((event) => {
        if (event.affectsConfiguration("files.associations")) {
          updateFileIconAssociations();
        }
      });

      updateFileIconAssociations();
    });
  }

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

function updateFileIconAssociations() {
  const config = vscode.workspace.getConfiguration("files");
  const fileAssociations = config.get<any>("associations") || {};

  fileAssociations[".end"] = "icons/endurance.svg";

  config.update("associations", fileAssociations, true);
}

export function deactivate() {}
