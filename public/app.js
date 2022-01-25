console.log("app.js loaded");

const btnL = document.getElementsByClassName("btnL")[0];
btnL.addEventListener("click", () => {
   astroResponseL()
})
const btnA = document.getElementsByClassName("btnA")[0];
btnA.addEventListener("click", () => {
   astroResponseA()
})

async function astroResponseL(){
    const resL = await fetch("/astroL")
    const dataL = await resL.json()
    let astroNameL = dataL.location.name + " " + dataL.current.feelslike_c + `℃` + " " + dataL.current.condition.text;
    let Lımg = dataL.current.condition.icon

    var imgL = new Image();
    imgL.src = Lımg
    document.getElementsByClassName('astroImgL')[0].appendChild(imgL);
    
    let astroNameDivL = document.createElement('div');
    astroNameDivL.id = 'ln--div';
    astroNameDivL.textContent = astroNameL;
    document.getElementsByClassName('astroNameL')[0].appendChild(astroNameDivL);

}
async function astroResponseA(){
    const resA = await fetch("/astroA")
    const dataA = await resA.json()
    let astroNameA = dataA.location.name + " " + dataA.current.feelslike_c + `℃` + " " + dataA.current.condition.text;
    let Aımg = dataA.current.condition.icon

    var imgA = new Image();
    imgA.src = Aımg
    document.getElementsByClassName('astroImgA')[0].appendChild(imgA);
    
    let astroNameDivA = document.createElement('div');
    astroNameDivA.id = 'ln--div';
    astroNameDivA.textContent = astroNameA;
    document.getElementsByClassName('astroNameA')[0].appendChild(astroNameDivA);
}