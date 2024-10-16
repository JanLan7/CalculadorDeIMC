let peso = parseFloat(prompt("¿Cuánto pesa usted?"));
let altura = Number(prompt("¿Cuánto mide usted en metros?"));

let imc = peso / (altura ** 2);

alert("Tu índice de masa corporal es: " + imc.toFixed(2));


if (imc >= 30){
    alert("Tienes obesidad");
}else if(imc >= 25 && imc <= 30){
    alert("Tienes un peso superior al normal");
}else if(imc>= 18 && imc < 25){
    alert("Tienes un peso normal!");
}else{
    alert("Tienes un peso inferior al normal");
}
