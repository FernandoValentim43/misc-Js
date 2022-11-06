let tf1 = 2.5;
let vqr1 = 1;
let tf2 = 5.0;
let vqr2 = 0.75;

//verifica se todos os valores são iguais(vulgo se X empresa é SEMPRE melhor)
if (Array.prototype.allValuesSame === undefined) {
  Array.prototype.allValuesSame = function () {
    for (let i = 1; i < this.length; i++) {
      if (this[i] !== this[0]) {
        return false;
      }
    }
    return true;
  };
}

function calculaCorrida(taxa, km, dist) {
  return taxa + km * dist;
}

let b = [];

for (let dist = 1; dist <= 10; dist += 0.1) {
  let aux = dist.toFixed(2);
  if (calculaCorrida(tf1, vqr1, aux) > calculaCorrida(tf2, vqr2, aux)) {
    b.push("A");
  } else if (calculaCorrida(tf2, vqr2, aux) > calculaCorrida(tf1, vqr1, aux)) {
    b.push("B");
  }
}

if (b.allValuesSame()) {
  if (b[0] == "A") {
    //se a empresa A é melhor em todos os casos
    return "Empresa 1";
  } else {
    //se a empresa B é melhor em todos os casos
    return "Empresa 2";
  }
} else {
  return "Empresa 1 quando a distância < 10.0, Tanto faz quando a distância = 10.0, Empresa 2 quando a distância > 10.0";
}
