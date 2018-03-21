export default function() {
  const allDivs = document.body.getElementsByTagName("div");
  const coordinates = [];
  for(let i in allDivs) {
    if(typeof allDivs[i] === "object"){
      allDivs[i].style.border = "hidden";
      const rNum = Math.random();
      if(rNum < 0.25)
        allDivs[i].style.borderTopStyle = "solid";
      else if(rNum >= 0.25 && rNum < 0.5 )
        allDivs[i].style.borderBottomStyle = "solid";
      else if(rNum >= 0.5 && rNum < 0.75 )
        allDivs[i].style.borderLeftStyle = "solid";
      else
        allDivs[i].style.borderRightStyle = "solid";
      //const rect = allDivs[i].getBoundingClientRect();
      //coordinates.push({
        //"div": allDivs[i],
        //"top": rect.top,
        //"bottom": rect.bottom,
        //"left": rect.left,
        //"right": rect.right
      //});
    }
  }
  console.log(coordinates);
}
