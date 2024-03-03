let count = 1;
let s1 = 0;
let s2 = 0;
let s3 = 0;
let s4 = 0;
let s5 = 0;
function switchClick() {
  if (count === 1) {
    main.classList.add("dayTime");
    main.classList.remove("nightTime");
    lightSwitch.textContent = "Hallo Nacht!";
  } else if (count === 2) {
    count = 0;
    main.classList.add("nightTime");
    main.classList.remove("dayTime");
    lightSwitch.textContent = "Hallo Tag!!";
  }
  count++;
}
/* NOTIZ!!!! 

vermutlich bliebt beim tag nacht wechsel animation aktiv und kann nicht überschieben werde, nochmal versuchen 
über inline style zu steuern vermutlich lösung!

#
*/

const lightSwitch = document.querySelector(".light-switch");
const main = document.querySelector("main");
const starDance1 = document.querySelector(".star-dance-button1");
const starDance2 = document.querySelector(".star-dance-button2");
const starDance3 = document.querySelector(".star-dance-button3");
const starDance4 = document.querySelector(".star-dance-button4");
const starDance5 = document.querySelector(".star-dance-button5");
const star1 = document.querySelector(".star1");
const star2 = document.querySelector(".star2");
const star3 = document.querySelector(".star3");
const star4 = document.querySelector(".star4");
const star5 = document.querySelector(".star5");

lightSwitch.addEventListener("click", switchClick);

starDance1.addEventListener("click", function () {
  if (s1 === 0) {
    star1.style.animation = "sparkiling-stars 2s infinite";
    s1++;
  } else if (s1 === 1) {
    star1.style.animation = "";
    s1 = 0;
  }
});
starDance2.addEventListener("click", function () {
  if (s2 === 0) {
    star2.style.animation = "sparkiling-stars 2s infinite";
    s2++;
  } else if (s2 === 1) {
    star2.style.animation = "";
    s2 = 0;
  }
});
starDance3.addEventListener("click", function () {
  if (s3 === 0) {
    star3.style.animation = "sparkiling-stars 2s infinite";
    s3++;
  } else if (s3 === 1) {
    star3.style.animation = "";
    s3 = 0;
  }
});
starDance4.addEventListener("click", function () {
  if (s4 === 0) {
    star4.style.animation = "sparkiling-stars 2s infinite";
    s4++;
  } else if (s4 === 1) {
    star4.style.animation = "";
    s4 = 0;
  }
});
starDance5.addEventListener("click", function () {
  if (s5 === 0) {
    star5.style.animation = "sparkiling-stars 2s infinite";
    s5++;
  } else if (s5 === 1) {
    star5.style.animation = "";
    s5 = 0;
  }
});

// change nevent!!! geil!
// input  geil!! --> timer einbaubar!
// dadurch reicht ein eventlistener und darüber lässt sich im event.target feststellen
// wo genau geklickt wurde
// keypress für tastendruck (keyboardevent) code --> gibt die taste an, welche benutzt wurde
// window.eventListener --> wenn irgendwo gedrückt wird!
// event.preventDefault(); --> das standart browserverhalten wird unterdrückt,
// wichtig bei z.b form tag der eine löschen der browsersession einleitet per default
// .innerText um text im fesnster ausgubene
// beispielelementTAG.classList.add('big') --> weißt dem element eine classe zu die dan mit css angesteuert werden aknn
// einmaliges ergeb nis .classList.remove("big") um die nicht mehr benötigte klasse wieder entfernt wird

// beispielelementTAG.style.borderColor = "2px solid red"     --> geil!
// die css-properties müssen mit camelCase statt mit bindestich geschireben werden! statt: border-color --> borderColor
