 const con = document.querySelector("img");
 const heart = document.querySelector("i");

 con.addEventListener("dblclick",function(){
setTimeout(function(){  heart.style.transform ="translate(-50% ,-50% ) scale(1.5)";

},600);
  setTimeout(function(){
    heart.style.transform ="translate(-50% ,-50% ) scale(1)";

  },900)
  setTimeout(function(){
    heart.style.transform ="translate(-50% ,-50% ) scale(1.3)";

  },1200)

  

  setTimeout(function(){
    heart.style.opacity = "0";

  },1300)

 })