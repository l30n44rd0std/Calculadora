const resultPrimo = document.querySelector("#resultPrimo");
const resultPar = document.querySelector("#resultPar");
const resultImpar = document.querySelector("#resultImpar");

const inputResultado = document.querySelector(".testeResult");

function getResult(value) {
  inputResultado.value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function backspace() {
  let result = document.getElementById("result").value;
  document.getElementById("result").value = result.substr(0, result.length - 1);
}

function calculateResult() {
  let result = document.getElementById("result").value;
  let expression = result
    .replace(/isEven/g, "%2==0")
    .replace(/isOdd/g, "%2!=0")
    .replace(/isPrime/g, "isPrime($&)")
    .replace(/(\d+)!/g, "factorial($1)")
    .replace(/(\d+)sqrt/g, "Math_sqrt($1)")
    .replace(/\^/g, "**");

  try {
    let evalResult = eval(expression);
    console.log(evalResult);

    if (evalResult === Infinity || isNaN(evalResult)) {
      document.getElementById("result").value = "Erro";
    } else {
      document.getElementById("result").value = evalResult;

      resultPar.innerHTML = Number(evalResult) % 2 == 0 ? "sim" : "não";
      resultImpar.innerHTML = Number(evalResult) % 2 != 0 ? "sim" : "não";

      if (isPrime(evalResult)) {
        resultPrimo.innerHTML = "sim";
      } else {
        resultPrimo.innerHTML = "não"
      }
    }
  } catch {
    document.getElementById("result").value = "Erro";
  }
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function Math_sqrt(n) {
  return Math.sqrt(n);
}
