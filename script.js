function start(){
  document.getElementById("intro").classList.add("scale-in");
}

function section1(){
  document.getElementById("part1").classList.add("scale-in");
}

function section2a(){
  document.getElementById("part2").classList.add("scale-in");
  document.getElementById("sneak").classList.add("disabled");
}

function section2b(){
  document.getElementById("lose1").classList.add("scale-in");
  document.getElementById("zoom").classList.add("disabled");
  document.getElementById("part2").style.display = "none";
}

function end(){
  document.getElementById("ending").classList.add("scale-in");
  document.getElementById("lose1").style.display = "none";
}