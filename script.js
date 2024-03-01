let count = 0;
function buttonClick() {
  if (count === 1) {
    console.log("klick!");
    html.classList.add("color0");
    html.classList.remove("color1");
  }

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
    html.classList.add("color1");
    html.classList.remove("color0");
  }
  count++;
}

const lightSwitch = document.querySelector("button");
const html = document.querySelector("html");

window.addEventListener("click", buttonClick);

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
