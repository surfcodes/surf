import vscode, { window } from 'vscode';

export const parseUri = (uri) => {
    const [owner, repo, branch] = (uri.authority || '').split('+').filter(Boolean);
    return {
        owner,
        repo,
        branch,
        path: uri.path,
    };
};

vscode.commands.registerCommand("jupyter.showPreview", async function(uri) {
    try {
        const { owner, repo, branch, path } = parseUri(uri);
        const link = "https://gist.githubusercontent.com/softmarshmallow/9659717bf0a876940b65ee3cdaef0655/raw/c0f7f86bb7758bfd61b71f11e836c6935fe3d735/gist_demo_flutter.dart";

        const href = `https://frames-appbox.vercel.app/flutter?language=dart&mode=url&src=${link}`;
        // const success = await vscode.commands.executeCommand('vscode.previewHtml', previewUri, vscode.ViewColumn.Two, 'IPython Notebook Preview');
        // Create and show panel
        const panel = vscode.window.createWebviewPanel('dartpreview', "Dart Application Preview", vscode.ViewColumn.Two, { enableScripts: true, retainContextWhenHidden: true });
        panel.webview.html = `
            <style> 
                .vscode-dark { 
                    padding: 0px !important; 
                } 
            </style>
            <iframe 
                class="ifrm" 
                style="height: 100vh; width: 100vw; padding: 0px;" 
                class="webview ready" 
                sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-downloads" 
                src="${href}"
            >
            </iframe>
        `;
        console.log("successfully showed preview");
    } catch (reason) {
        console.error(reason);
        vscode.window.showErrorMessage("An error occured while rendering the preview");
    }
});