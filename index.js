//Primer PreEntrega
//Alumno: Lucas Santino Steckler

alert('Bienvenido aca podras cotizar cuantos dolares te daran por tu pesos!');

let ingresarValorDolar;
let ingresarValorPesos;

while (true) {
  ingresarValorDolar = parseFloat(prompt('Ingresa el valor del dolar actual:'));
  ingresarValorPesos = parseFloat(
    prompt('Ingresa la cantidad de pesos que quieres cambiar por USD:')
  );

  if (
    !isNaN(ingresarValorDolar) &&
    !isNaN(ingresarValorPesos) &&
    ingresarValorDolar > 0 &&
    ingresarValorPesos > 0
  ) {
    break;
  } else {
    alert('Por favor, ingresa valores numéricos válidos.');
  }
}

const calcularCambio = (ars, usd) => {
  let resultado = ars / usd;

  alert(`Puedes comprar ${resultado.toFixed(2)} USD`);
};

calcularCambio(ingresarValorPesos, ingresarValorDolar);
