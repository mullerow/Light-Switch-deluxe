let count = 0;
function switchClick() {
  if (count === 1) {
    console.log("klick!");
    main.classList.add("color0");
    main.classList.remove("color1");
    lightSwitch.textContent = "Hallo Nacht!";
  }
  if (count === 2) {
    count = 0;
    main.classList.add("color1");
    main.classList.remove("color0");

    lightSwitch.textContent = "Hallo Tag!!";
    star1.style.animation = "";
  }
  !count++;
}

function danceClick() {
  star1.style.animation = "sparkiling-stars 2s infinite";
  star1.classList.add("dance-click");
  star2.classList.add("dance-click");
  star3.classList.add("dance-click");
  star4.classList.add("dance-click");
  star5.classList.add("dance-click");
}

const lightSwitch = document.querySelector(".light-switch");
const main = document.querySelector("main");
const starDance = document.querySelector(".star-dance-button");
const star1 = document.querySelector(".star1");
const star2 = document.querySelector(".star2");
const star3 = document.querySelector(".star3");
const star4 = document.querySelector(".star4");
const star5 = document.querySelector(".star5");

lightSwitch.addEventListener("click", switchClick);

starDance.addEventListener("click", danceClick);

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
