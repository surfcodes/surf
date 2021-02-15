/**
 * @file extension entry
 * @author netcon
 */

import * as vscode from 'vscode';
import { GitHubSurfFS } from './githubsurffs';
import { SettingsView } from './settings-view';
import { setExtensionContext } from './util';
import { commandUpdateToken, commandValidateToken, commandClearToken, commandSwitchBranch, commandSwitchTag, commandGetCurrentAuthority } from './commands';

export function activate(context: vscode.ExtensionContext) {
	setExtensionContext(context);
	context.subscriptions.push(new GitHubSurfFS());

	context.subscriptions.push(vscode.window.registerWebviewViewProvider(SettingsView.viewType, new SettingsView()));

	context.subscriptions.push(vscode.commands.registerCommand('githubsurf.validate-token', commandValidateToken));
	context.subscriptions.push(vscode.commands.registerCommand('githubsurf.update-token', commandUpdateToken));
	context.subscriptions.push(vscode.commands.registerCommand('githubsurf.clear-token', commandClearToken));
	context.subscriptions.push(vscode.commands.registerCommand('githubsurf.get-current-authority', commandGetCurrentAuthority));
	context.subscriptions.push(vscode.commands.registerCommand('githubsurf.switch-branch', commandSwitchBranch));
	context.subscriptions.push(vscode.commands.registerCommand('githubsurf.switch-tag', commandSwitchTag));
}
