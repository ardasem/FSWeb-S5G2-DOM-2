import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

const img = document.querySelector(".intro img");
let flagMouseOver = false;

img.addEventListener("mouseover", () => {
  if (flagMouseOver) {
    img.setAttribute("style", "opacity:1");
    flagMouseOver = false;
  } else {
    img.setAttribute("style", "opacity:0.2");
    flagMouseOver = true;
  }
});

const heading = document.querySelector("h2");
heading.setAttribute("style", "cursor: pointer");
let headingFlag = false;

heading.addEventListener("dblclick", () => {
  if (headingFlag) {
    heading.setAttribute("style", "color:black");
    headingFlag = false;
  } else {
    heading.setAttribute("style", "color:red");
    headingFlag = true;
  }
});

function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;

  scale = Math.min(Math.max(0.125, scale), 4);

  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector(".img-content img");
el.onwheel = zoom;

const btn = document.querySelectorAll(".btn");

btn.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    button.setAttribute("style", "background-color:red");
  });
});
