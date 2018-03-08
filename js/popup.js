function runPlugin() {
  chrome.tabs.executeScript(null, {file: 'pacman_bundle.js'});
}

window.onload = runPlugin();

