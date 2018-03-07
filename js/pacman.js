(function() {
  function init() {
    const size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    }

    createMaze();
    const pacman = createMouse(size);
    let speed = 4;
    document.body.appendChild(createStopBtn());
    document.body.appendChild(pacman);
    document.onkeydown = moveMouse.bind(document, pacman, speed);
  }


  function createMaze() {
    const allDivs = document.body.getElementsByTagName("div");
    for(let i in allDivs) {
      if(typeof allDivs[i] === "object"){
        allDivs[i].style.border = "1px dotted #000000";
      } 
    }
  }

  function createMouse(size) {
    pacman = document.createElement("div");
    pacman.id = "pacman";
    pacman.textContent = "@";
    pacman.style.fontSize = "25px";
    pacman.style.top = "80px";
    pacman.style.left = "60px";
    pacman.style.position = "absolute";
    pacman.style.zIndex = "10000";
    return pacman;
  }

  function createStopBtn() {
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

  function moveMouse(pacman, speed, e) {
    e = e || window.event;
    e.preventDefault();
    pacman.scrollIntoView({behavior: "instant"});
    console.log(pacman.offsetTop, pacman.offsetLeft);
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

  function reload() {
    window.location.reload();
  }

  init();
})()
