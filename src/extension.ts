import * as vscode from "vscode";
// import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "endurance" is now active!');

  const extensionUri = context.extensionUri;
  const iconPath = joinPath(extensionUri, "icons", "endurance.svg");

  const fileIconTheme = vscode.extensions.getExtension("vscode.file-icons");

  if (fileIconTheme) {
    fileIconTheme.activate().then(() => {
      vscode.workspace.onDidChangeConfiguration((event) => {
        if (event.affectsConfiguration("files.associations")) {
          updateFileIconAssociations(iconPath);
        }
      });

      updateFileIconAssociations(iconPath);
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

  // Create the status bar item
  const statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left
  );
  statusBarItem.tooltip = "Endurance Extension";
  statusBarItem.color = new vscode.ThemeColor("statusBar.foreground");
  statusBarItem.show();

  statusBarItem.text = `$(${iconPath}) Endurance`;
  statusBarItem.show();

  context.subscriptions.push(disposable, statusBarItem);
}

function updateFileIconAssociations(iconPath: string) {
  const config = vscode.workspace.getConfiguration("files");
  const fileAssociations = config.get<any>("associations") || {};

  fileAssociations[".end"] = iconPath;
  fileAssociations[".customext"] = iconPath;

  config.update("associations", fileAssociations, true);
}

function joinPath(uri: vscode.Uri, ...pathFragment: string[]): string {
  return vscode.Uri.joinPath(uri, ...pathFragment).fsPath;
}

export function deactivate() {}
