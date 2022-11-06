let tf1 = 2.5;
let vqr1 = 1.0;
let tf2 = 5.0;
let vqr2 = 0.75;

function calc(tarifa, taxa, dist) {
  if (dist == undefined) {
    dist = 1;
  }

  return tarifa + taxa * dist
  console.log(tarifa + taxa * dist);
}

let resposta = []
for (let dist = 0; dist < 11.0; dist += 0.1) {
   
  let aux = dist.toFixed(2);
  console.log(aux)

  if(calc(tf1,vqr1,aux) > calc(tf2,vqr2,aux)) {
    resposta.push(1) //melhor empresa 1
  } else if ( calc(tf1,vqr1,aux) < calc(tf2,vqr2,aux)) {
    resposta.push(2) //melhor empresa 2
  } else {
    resposta.push(0) //tanto faz nesse exato valor
  }
}



 console.dir(resposta, {'maxArrayLength': null}); 