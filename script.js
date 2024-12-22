function BreakTheText(){
    let h1=document.querySelector("h1");
let h1Text=h1.textContent;

let splitTextArray=h1Text.split("");
let lengthofarr=splitTextArray.length/2
let textcontent="";

 splitTextArray.forEach((e,idx)=>{
    if(idx<lengthofarr) textcontent+= `<span class="a">${e}</span>`;
    else textcontent+= `<span class="b">${e}</span>`;
 })

 h1.innerHTML=textcontent
}

BreakTheText();

gsap.from("h1 .a",{
    y:80,
    duration:1,
    delay:0.3,
    stagger:0.3,
    opacity:0
})

gsap.from("h1 .b",{
    y:80,
    duration:1,
    delay:0.3,
    stagger:-0.3,
    opacity:0
})