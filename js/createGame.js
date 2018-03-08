export const createPacman = function() {
  const pacman = document.createElement("div");
  pacman.id = "pacman";
  pacman.textContent = "@";
  pacman.style.fontSize = "25px";
  pacman.style.top = "80px";
  pacman.style.left = "60px";
  pacman.style.position = "absolute";
  pacman.style.zIndex = "10000";
  return pacman;
}

export const createStopBtn = function() {
  const btn = document.createElement("BUTTON");
  btn.innerHTML = "STOP GAME";
  btn.id = "stop-btn"
  btn.style.top = "10px";
  btn.style.float = "right";
  btn.style.position = "fixed";
  btn.style.zIndex = "10000";
  btn.onclick = reload;
  return btn;
}
function reload() {
  window.location.reload();
}

