let count = 0;
function buttonClick() {
  console.log("klick!");
  count++;
  if (count === 2) {
    console.log("HEy!");
  }
  if (count === 3) {
    console.log("Lass Das!");
  }

  if (count === 4) {
    console.log("STopp!!!!!!");
  }
  if (count === 5) {
    console.log("BOOOOMMM!!!!!!");
    count = 0;
  }
}

const lightSwitch = document.querySelector("button");
const main = document.querySelector("main");
/*
main.addEventListener("click", function () {
  console.log("mainklick!");
});
*/
window.addEventListener("keypress", function (eventObj) {
  if (eventObj.key == "a") {
    console.log("klickiiiii");
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
