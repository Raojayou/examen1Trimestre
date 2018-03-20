function funcionEjecutar() {

    let pesos = [
        parseInt(document.getElementById("numero1").value),
        parseInt(document.getElementById("numero2").value),
        parseInt(document.getElementById("numero3").value),
        parseInt(document.getElementById("numero4").value),
    ]

    let resta;

    let superior = 0;
    let igual = pesos;
    let inferior = 99999;

    for (let i = 0; i < pesos.length; i++) {

        if (pesos[i] > superior) {
            superior = pesos[i];
        }

        if (pesos[i] < inferior) {
            inferior = pesos[i];
        }

    }

    resta = superior - inferior;

    if (resta === 0) {
        alert(pesos[0] + "  " + pesos[1] + "  " + pesos[2] + "  " + pesos[3]);
    } else {

        if (resta % 2 === 0) {
            alert(pesos[1] + "  " + pesos[3]);
        } else {
            alert(pesos[0] + "  " + pesos[2]);
        }
    }


}

function funcionEjecutar2() {
    let pesoPersona1 = document.getElementById("numero1").value;
    let pesoPersona2 = document.getElementById("numero2").value;
    let pesoPersona3 = document.getElementById("numero3").value;
    let pesoPersona4 = document.getElementById("numero4").value;

    let pesos = [pesoPersona1, pesoPersona2, pesoPersona3, pesoPersona4];

    let superiorPeso = pesos.sort((x,y) => x<y)[0];
    let inferiorPeso = pesos.sort((x,y) => x>y)[0];

    let restaPesos = superiorPeso-inferiorPeso;

    if (restaPesos % 2 === 0 && restaPesos !== 0) {
        alert(`Peso persona 2: ${pesoPersona2}, Peso persona 4: ${pesoPersona4}`);
    }
    if (restaPesos % 2 !== 0){
        alert(`Peso persona 1: ${pesoPersona1}, Peso persona 3: ${pesoPersona3}`);
    }
    if (restaPesos === 0){
        alert(`Peso persona 1: ${pesoPersona1}, Peso persona 2: ${pesoPersona2}, Peso persona 3: ${pesoPersona3}, Peso persona 4: ${pesoPersona4}`)
    }
}