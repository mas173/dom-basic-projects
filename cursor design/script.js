 const cursor = document.querySelector("#cursor");
 const body = document.querySelector(".box");

 body.addEventListener("mousemove",function(detail){
  cursor.style.left = detail.x + "px";
  cursor.style.top = detail.y + "px";


 })