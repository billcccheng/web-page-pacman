export default function() {
  const allDivs = document.body.getElementsByTagName("div");
  for(let i in allDivs) {
    if(typeof allDivs[i] === "object"){
      allDivs[i].style.border = "1px dotted #000000";
    }
  }
}
