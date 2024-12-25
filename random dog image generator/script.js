 const url = "https://dog.ceo/api/breeds/image/random";
let link = "";
 
const btn = document.querySelector("button");
btn.addEventListener("click", async (evnt) => {
  evnt.preventDefault;
  let response = await fetch(url);
  console.log(response);
  data = await response.json();
  link = data.message;
  console.log(link);
  const img = document.querySelector(".img");
  img.src = link;
})