function runPlugin(keyword) {
  chrome.tabs.executeScript(null, {file: 'js/pacman.js'});
}

window.onload = runPlugin();

