assinante = [false,false]

minutosAssistidos = [61, 60]

for(let i = 0; i < minutosAssistidos.length; i++) {
    minutosAssistidos[i] = Math.ceil(minutosAssistidos[i]/60) //horas inteiras
}


function checaAssinatura(assinantes,minutos) {
    for(let i = 0 ; i < minutos.length ; i++) {
        if(assinantes[i] == true) {
            minutosAssistidos[i] = minutosAssistidos[i] * 2 //caso for assinante multiplica por 2
        }
    }
}

function achaProbabilidade(minutosAssistidos) {
    let finalArr = [];
    let prob;

    for(let i = 0; i < minutosAssistidos.length ; i++) {
        const sum = minutosAssistidos.reduce((partialSum, a) => partialSum + a, 0); //valor total
        prob = (minutosAssistidos[i] * 100)/sum //porcentagem
        prob = Math.round(prob) 
        finalArr[i] = prob
    }

    console.log(finalArr)
    return finalArr

}



checaAssinatura(assinante,minutosAssistidos)
achaProbabilidade(minutosAssistidos)

