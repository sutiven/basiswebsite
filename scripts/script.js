// JavaScript Document
console.log("Howdy!");

var bodyElement = document.querySelector("body");

var characterGif = document.querySelector("section > img");

var vlagInformatie = document.querySelector("article > img");

var ryuButton = document.querySelector("section ul li:nth-of-type(1)");
var vegaButton = document.querySelector("section ul li:nth-of-type(2)");
var elfuerteButton = document.querySelector("section ul li:nth-of-type(3)");
var ibukiButton = document.querySelector("section ul li:nth-of-type(4)");
var balrogButton = document.querySelector("section ul li:nth-of-type(5)");
var lilyButton = document.querySelector("section ul li:nth-of-type(6)");
var deejayButton = document.querySelector("section ul li:nth-of-type(7)");
var jaimieButton = document.querySelector("section ul li:nth-of-type(8)");

var nameTekst = document.querySelector("#nameWeapon");
var originTekst = document.querySelector("#nameOrigin");
var characterTekst = document.querySelector("#nameCharacter");
var materialTekst = document.querySelector("#nameMaterial");
var descriptionTekst = document.querySelector("#nameDescription");

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

  characterGif.src = "./gifs/Ryu.gif";

  vlagInformatie.src = "./images/country_flags/Japan.png";

  nameTekst.textContent = "Name: Karate Gloves";
  originTekst.textContent = "Origin Country: Japan";
  characterTekst.textContent = "Character: Ryu Hiroshi";
  materialTekst.textContent = "Material: Polyurethane Leather (PU)";
  descriptionTekst.textContent =
    "Description: Ryu wears a white gi, as a symbol of his Japanese heritage, with the Japanese symbols for the Fūrinkazan 風林火山 Hepburn: Wind, Forest, Fire, Mountain on his belt as well as a stylised version on his gloves. Karate gloves, also known as karate sparring gloves or mitts, are protective gear worn by martial artists during karate sparring or training sessions. These gloves are designed to provide some degree of protection to the hands and knuckles while allowing the martial artist to maintain mobility and dexterity.";
}
function vegaInfo() {
  bodyElement.className = "";
  bodyElement.classList.add("vega");

  characterGif.src = "./gifs/Vega.gif";

  vlagInformatie.src = "./images/country_flags/India.png";

  nameTekst.textContent = "Name: Bagh Nakh";
  originTekst.textContent = "Origin Country: Mexico";
  characterTekst.textContent = "Character: Vega";
  materialTekst.textContent = "Material: Metal";
  descriptionTekst.textContent =
    "Description: Hand-fighting weapons are small, portable weapons, often worn covertly, and usually intended to wound or maim rather than kill. One such weapon, designed for concealment, was the bagh nakh or 'Tiger's Claw'. It was worn under a glove or between the fingers to give the wearer the advantage of surprise in duels and street fights.";
}
function elfuerteInfo() {
  bodyElement.className = "";
  bodyElement.classList.add("elfuerte");

  characterGif.src = "./gifs/El Fuerte.gif";

  vlagInformatie.src = "./images/country_flags/Mexico.png";

  nameTekst.textContent = "Name: Lucha Libre Mask";
  originTekst.textContent = "Origin Country: Mexico";
  characterTekst.textContent = "Character: El Fuerte";
  materialTekst.textContent = "Material: Lightweight cotton material";
  descriptionTekst.textContent =
    "Description: Masks (máscaras) have been used dating back to the beginnings of Lucha Libre in the early part of the 20th century, and have a historical significance to Mexico in general, dating to the days of the Aztecs. Early masks were very simple with basic colors to distinguish the wrestler.";
}
function ibukiInfo() {
  bodyElement.className = "";
  bodyElement.classList.add("ibuki");

  characterGif.src = "./gifs/Ibuki.gif";

  vlagInformatie.src = "./images/country_flags/Japan.png";

  nameTekst.textContent = "Name: Kunai";
  originTekst.textContent = "Origin Country: Japan";
  characterTekst.textContent = "Character: Ibuki";
  materialTekst.textContent = "Material: Metal";
  descriptionTekst.textContent =
    "Description: According to Akiman, the team incorporated Koppōjutsu into Ibuki's ninjutsu-based moveset because the fighting style was gaining popularity around the time she was being designed. A kunai is a traditional Japanese tool that has a long history of use, both as a farming implement and as a concealed weapon. It is often described as a type of knife or dagger and is characterized by its simple design, which consists of a straight, pointed blade with a handle at the opposite end.";
}
function balrogInfo() {
  bodyElement.className = "";
  bodyElement.classList.add("balrog");

  characterGif.src = "./gifs/Balrog.gif";

  vlagInformatie.src = "./images/country_flags/England.png";

  nameTekst.textContent = "Name: Boxing Gloves";
  originTekst.textContent = "Origin Country: England";
  characterTekst.textContent = "Character: Balrog";
  materialTekst.textContent = "Material: Polyurethane Leather (PU)";
  descriptionTekst.textContent =
    "Description: In the Street Fighter series, Balrog, who is based on Mike Tyson, uses his signature Peek-a-Boo style. Boxing gloves are specialized protective gear designed for boxers and other combat sports practitioners to protect their hands during training, sparring, and competitive matches. They serve several important functions, including hand protection, wrist support, and enhancing the safety of both the user and their sparring partner.";
}
function lilyInfo() {
  bodyElement.className = "";
  bodyElement.classList.add("lily");

  characterGif.src = "./gifs/Lily.gif";

  vlagInformatie.src = "./images/country_flags/Tribal_flag.jpg";

  nameTekst.textContent = "Name: Pogamoggan";
  originTekst.textContent = "Origin Country: American Indian (Ojibwa)";
  characterTekst.textContent = "Character: Lily";
  materialTekst.textContent = "Material: Antler and Wood";
  descriptionTekst.textContent =
    "Description: A club used as a weapon or ceremonial object by various American Indian peoples and usually consisting in the Great Lakes region of a flat curved club with a knobbed head and in the Plains region of a piece of stone fastened to the end of a slender stick covered with leather.";
}
function deejayInfo() {
  bodyElement.className = "";
  bodyElement.classList.add("deejay");

  characterGif.src = "./gifs/Dee Jay.gif";

  vlagInformatie.src = "./images/country_flags/Jamaica.png";

  nameTekst.textContent = "Name: Chac Chac's";
  originTekst.textContent = "Origin Country: Jamaica";
  characterTekst.textContent = "Character: Dee Jay";
  materialTekst.textContent = "Material: Limestone";
  descriptionTekst.textContent =
    "Description: The Speedy Maracas (マラカスビート, Marakasu Bīto?, Maracas' Beat) is one of Dee Jay's unique attacks, first introduced in Street Fighter 6. Chac Chac’s are a type of musical instrument that belongs to the percussion family. They are commonly associated with Latin American and Caribbean music, and they are often used to create rhythmic and percussive sounds.";
}
function jaimieInfo() {
  bodyElement.className = "";
  bodyElement.classList.add("jaimie");

  characterGif.src = "./gifs/Jamie.gif";

  vlagInformatie.src = "./images/country_flags/China.png";

  nameTekst.textContent = "Name: Gourd";
  originTekst.textContent = "Origin Country: China";
  characterTekst.textContent = "Character: Jaimie";
  materialTekst.textContent = "Material: Hard wood";
  descriptionTekst.textContent =
    "Description: The drink in Jamie's jug is called Yakutou (薬湯), an herbal tea instead of alcohol. Matsumoto followed up by calling it a special drink and everyone in the room started laughing. Drunk style martial arts, also known as Drunken Fist or Zui Quan (醉拳) in Chinese, is a unique and theatrical martial arts style that imitates the movements and behavior of a drunken person. It is characterized by its fluid, unpredictable, and erratic movements that make it appear as though the practitioner is stumbling or swaying like someone who has consumed alcohol.";
}
