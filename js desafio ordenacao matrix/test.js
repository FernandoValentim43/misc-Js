let senha = [
  "0110100000",
  "1001011111",
  "1110001010",
  "0111010101",
  "0011100110",
  "1010011001",
  "1101100100",
  "1011010100",
  "1001100111",
  "1000011000",
];

const generalLength = 10;

let tempArr = [];
let finalArr = [];
for (let i = 0; i < generalLength; i++) {
  for (let ii = 0; ii < generalLength; ii++) {
    tempArr[ii] = senha[ii][i]; //pega o primeiro valor de cada array e coloca em um array
  }

  finalArr[i] = descobreZeros(tempArr.toString()); //verifica a quantidade de zeros de cada valor e coloca em um array
}

finalArr = parseInt(finalArr.join(""), 2);
console.log(finalArr);
return finalArr;

function descobreZeros(string) {
  let zeros = 0;
  let ums = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == 0) {
      zeros++;
    } else if (string.charAt(i) == 1) {
      ums++;
    }
  }

  if (zeros > ums) {
    return 0; //caso tenha mais zeros
  } else {
    return 1; //caso tenha ou igual uns
  }
}
