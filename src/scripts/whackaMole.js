export default function() {
  // just place a div at top right
  var div = document.createElement("div");
  div.style.position = "fixed";
  div.style.top = 0;
  div.style.left = 0;
  div.textContent = "Injected!";
  document.body.appendChild(div);
};
