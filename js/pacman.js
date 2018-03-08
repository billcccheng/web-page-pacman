import {createPacman, createStopBtn} from './createGame';
import createMaze from './createMaze';

function init() {
  const size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight
  }

  createMaze();
  const pacman = createPacman();
  const stopBtn = createStopBtn()
  document.body.appendChild(pacman);
  document.body.appendChild(stopBtn);
  let speed = 4;
  document.onkeydown = moveMouse.bind(document, pacman, speed);
}




function moveMouse(pacman, speed, e) {
  e = e || window.event;
  e.preventDefault();
  pacman.scrollIntoView({behavior: "instant"});
  if (e.key === 'ArrowUp') {
    pacman.style.top = (parseInt(pacman.style.top) - speed) + "px";
  }
  else if (e.key === 'ArrowDown') {
    pacman.style.top = (parseInt(pacman.style.top) + speed) + "px";
  }
  else if (e.key === 'ArrowLeft') {
    pacman.style.left = (parseInt(pacman.style.left) - speed) + "px";
  }
  else if (e.key == 'ArrowRight') {
    pacman.style.left = (parseInt(pacman.style.left) + speed) + "px";
  }

}

init();
