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

  const fileAssociations = vscode.workspace.getConfiguration('files').get<any>('associations') || {};
  fileAssociations['.end'] = 'endurance';
  vscode.workspace.getConfiguration('files').update('associations', fileAssociations, true);

  // Register the configuration for Material Icons
  const materialIconsConfig = vscode.workspace.getConfiguration('material-icon-theme');
  const fileExtensionsConfig: { [key: string]: string } = materialIconsConfig.get('fileExtensions') || {};
  fileExtensionsConfig['.end'] = 'icons/endurance.svg';
  materialIconsConfig.update('fileExtensions', fileExtensionsConfig, true);

  // Display a message to the user indicating the icon has been configured
  vscode.window.showInformationMessage('Endurance icon has been set for .end files.');

  context.subscriptions.push(disposable);
}

export function deactivate() { }
