// JavaScript Document
console.log("Howdy!");

var bodyElement = document.querySelector("body");

var ryuButton = document.querySelector("section ul li:nth-of-type(1)");
var vegaButton = document.querySelector("section ul li:nth-of-type(2)");
var elfuerteButton = document.querySelector("section ul li:nth-of-type(3)");
var ibukiButton = document.querySelector("section ul li:nth-of-type(4)");
var balrogButton = document.querySelector("section ul li:nth-of-type(5)");
var lilyButton = document.querySelector("section ul li:nth-of-type(6)");
var deejayButton = document.querySelector("section ul li:nth-of-type(7)");
var jaimieButton = document.querySelector("section ul li:nth-of-type(8)");

ryuButton.onclick = ryuInfo;
vegaButton.onclick = vegaInfo;
elfuerteButton.onclick = elfuerteInfo;
ibukiButton.onclick = ibukiInfo;
balrogButton.onclick = balrogInfo;
lilyButton.onclick = lilyInfo;
deejayButton.onclick = deejayInfo;
jaimieButton.onclick = jaimieInfo;

function ryuInfo() {
  bodyElement.className = "";
  bodyElement.classList.add("ryu");
}
function vegaInfo() {
  bodyElement.className = "";
  bodyElement.classList.add("vega");
}
function elfuerteInfo() {
  bodyElement.className = "";
  bodyElement.classList.add("elfuerte");
}
function ibukiInfo() {
  bodyElement.className = "";
  bodyElement.classList.add("ibuki");
}
function balrogInfo() {
  bodyElement.className = "";
  bodyElement.classList.add("balrog");
}
function lilyInfo() {
  bodyElement.className = "";
  bodyElement.classList.add("lily");
}
function deejayInfo() {
  bodyElement.className = "";
  bodyElement.classList.add("deejay");
}
function jaimieInfo() {
  bodyElement.className = "";
  bodyElement.classList.add("jaimie");
}
