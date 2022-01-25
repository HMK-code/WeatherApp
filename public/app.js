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
    let astroNameL = dataL.location.name + " " + dataL.current.feelslike_c + `℃` + " " +
    dataL.current.condition.text;
    console.log(astroNameL);
    
    let astroNameDivL = document.createElement('div');
    astroNameDivL.id = 'ln--div';
    astroNameDivL.textContent = astroNameL;
    document.getElementsByClassName('astroName')[0].appendChild(astroNameDivL);

}
async function astroResponseA(){
    const resA = await fetch("/astroA")
    const dataA = await resA.json()
    let astroNameA = dataA.location.name + " " + dataA.current.feelslike_c + `℃` + " " +
    dataA.current.condition.text;
    console.log(astroNameA);
    
    let astroNameDivA = document.createElement('div');
    astroNameDivA.id = 'ln--div';
    astroNameDivA.textContent = astroNameA;
    document.getElementsByClassName('astroName')[0].appendChild(astroNameDivA);
}