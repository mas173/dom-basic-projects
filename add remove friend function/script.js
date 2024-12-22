const h3 = document.querySelector("h3");
const btn = document.querySelector("button");

let click = 0;

btn.addEventListener("click", function(){
  if(click == 0){
    h3.innerText ="friends";
    h3.style.color = "green";
    click = 1;

  }else{
    h3.innerText = "stranger";
    h3.style.color = "red";
    click = 0;

  }

})