var index=0;
var isTriangle=false;
var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');
var outer=document.getElementById('outer');
var inner=document.getElementsByClassName('inner');
// function randomcolor(){
// 	return Math.floor(Math.random()*256);
// };
btn1.addEventListener('click',changeColor);
btn2.addEventListener('click',changeShape);
function changeColor(){
   // outer.style.backgroundColor="rgb('+ randomcolor() +','+ randomcolor() +','+ randomcolor() +')";
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  outer.style.backgroundColor = "#" + randomColor;
};
function changeShape(){
    if(!isTriangle){
    var i = document.getElementsByClassName("inner")[0];
    i.className = "triangle-bottomleft";
    isTriangle = true;
  }else{
    var i = document.getElementsByClassName("triangle-bottomleft")[0];
    i.className = "inner";
    isTriangle = false;
  }
};