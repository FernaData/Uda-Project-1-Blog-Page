

/**
 * Define Global letiables
 *
*/
//texts for the about section
const textAbout = "München – eine Stadt, die berauscht, ernüchtert, beglückt,"+
"frustriert,erfrischt, erschreckt – kurz gesagt: eine Heimat,"+
" die so kompliziert ist,dass man das Fernweh vergisst.";

const textAboutShort= "München – eine Stadt, die berauscht, ernüchtert, beglückt, [...]";


//interactiveness related to the information fields on the right side of the page
const element=document.getElementById("information");


//element.children[1].childNodes[1].childNodes[3].childNodes[0]
let actAbout = 0; //about sec
let actArch1 = 0; //2021
let actArch2 = 0; //2020
let actSub=0; //SubButton


let aboutText= function(){
if (actAbout) {
  this.children[0].childNodes[3].className="highlight";
  this.children[0].childNodes[3].innerHTML=textAboutShort;
  actAbout=0;
    } else {
    this.children[0].childNodes[3].className="";
    this.children[0].childNodes[3].innerHTML= textAbout;
    actAbout=1;
    }
};


let archField1= function(){
if (actArch1) {
  this.parentElement.querySelectorAll("div")[1].style.display="inline-grid";
  actArch1=0;} else{
    this.parentElement.querySelectorAll("div")[1].style.display="";
    actArch1=1;
    }
};


let archField2= function(){
if (actArch2) {this.parentElement.querySelectorAll("div")[3].style.display="inline-grid"; actArch2=0;} else{
this.parentElement.querySelectorAll("div")[3].style.display=""; actArch2=1;}
};


let subField= function() {
  if (actSub) {this.innerText="Subscribe!";this.parentElement.querySelector("form").style.display=""; actSub=0; } else {this.innerText="Close"; this.parentElement.querySelector("form").style.display="grid"; actSub=1; }
};


let subFieldClose= function(){
    this.parentElement.style.display=""; document.querySelectorAll("header")[0].querySelector("p").innerText="Subscribe!";
};


let runJS = function(){
  element.children[0].addEventListener("click", aboutText);
  element.children[1].children[0].querySelectorAll("div")[0].addEventListener("click", archField1);
  element.children[1].children[0].querySelectorAll("div")[2].addEventListener("click", archField2);
  document.querySelectorAll("header")[0].querySelector("p").addEventListener("click", subField);
  document.getElementById("sub").addEventListener("click", subFieldClose);
};

runJS();
