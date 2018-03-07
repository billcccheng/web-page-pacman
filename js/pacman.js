(function() {
  function init() {
    const size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    }

    createMaze();
    const mouse = createMouse(size);
    let speed = 4;
    document.body.appendChild(createStopBtn());
    document.body.appendChild(mouse);
    document.onkeydown = moveMouse.bind(document, mouse, speed);
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
    mouse = document.createElement("div");
    mouse.id = "whack-a-mole-mouse";
    mouse.textContent = "@@@";
    mouse.style.fontSize = "25px";
    //mouse.style.top = getRandomInt(size.height) + "px";
    //mouse.style.left = getRandomInt(size.width)+ "px";
    mouse.style.top = "80px";
    mouse.style.left = "60px";
    mouse.style.position = "absolute";
    mouse.style.zIndex = "10000";
    return mouse;
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

  function moveMouse(mouse, speed, e) {
    e = e || window.event;
    e.preventDefault();
    mouse.scrollIntoView({behavior: "instant"});
    //speed += 1;
    if (e.key === 'ArrowUp') {
      mouse.style.top = (parseInt(mouse.style.top) - speed) + "px";
    }
    else if (e.key === 'ArrowDown') {
      mouse.style.top = (parseInt(mouse.style.top) + speed) + "px";
    }
    else if (e.key === 'ArrowLeft') {
      mouse.style.left = (parseInt(mouse.style.left) - speed) + "px";
    }
    else if (e.key == 'ArrowRight') {
      mouse.style.left = (parseInt(mouse.style.left) + speed) + "px";
    }

  }

  function reload() {
    window.location.reload();
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  init();
})()
