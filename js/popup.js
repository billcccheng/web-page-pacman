function runPlugin(keyword) {
  chrome.tabs.executeScript(null, {file: 'js/raceCar.js'});
}

window.onload = runPlugin();

