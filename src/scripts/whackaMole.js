/*global chrome*/
export const whackaMole = function() {
  const size = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight
  }

  let mouse = null;
  window.onscroll = function () { window.scrollTo(0, 0); }
  document.onkeydown = moveMouse;
  document.body.appendChild(createStopBtn());
  document.body.appendChild(createMouse());

  function createMouse() {
    mouse = document.createElement("div");
    mouse.id = "whack-a-mole-mouse";
    mouse.textContent = "@@@";
    mouse.style.fontSize = "50px";
    mouse.style.top = getRandomInt(size.height) + "px";
    mouse.style.left = getRandomInt(size.width)+ "px";
    mouse.style.position = "absolute";
    mouse.style.zIndex = "10000";
    mouse.onclick = hit;
    return mouse;
  }

  function createStopBtn() {
    const btn = document.createElement("BUTTON");
    btn.innerHTML = "STOP GAME";
    btn.id = "stop-btn"
    btn.style.top = "50px";
    btn.style.left = "50px";
    btn.style.position = "absolute";
    btn.style.zIndex = "10000";
    btn.onclick = reload;
    return btn;
  }

  function moveMouse(e) {
    e = e || window.event;
    if (e.key === 'ArrowUp') {
      mouse.style.top = (parseInt(mouse.style.top) - 10) + "px";
    }
    else if (e.key === 'ArrowDown') {
      mouse.style.top = (parseInt(mouse.style.top) + 10) + "px";
    }
    else if (e.key === 'ArrowLeft') {
      mouse.style.left = (parseInt(mouse.style.left) - 10) + "px";
    }
    else if (e.key == 'ArrowRight') {
      mouse.style.left = (parseInt(mouse.style.left) + 10) + "px";
    }

  }

  function hit() {
    console.log("HIT");
  }

  function reload() {
    window.location.reload();
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}

export const cleanUp = function() {
  const mouse = document.body.getElementById("whack-a-mole-mouse");
  mouse.remove();
}

