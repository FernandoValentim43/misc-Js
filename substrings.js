let texto =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

texto = texto.replaceAll(" ", ""); //formata a texto

let k = 2

let queries = ["a", "em", "i", "el"];

//cria um grid 
let  grid = [...Array(queries.length)].map(e => Array(2));

//adiciona o numero de recorrencias e cada valor no grid
for (let j = 0; j < queries.length; j++) {
  for (let i = 0; i < queries.length; i++) {
    grid[i][0] = texto.split(queries[i]).length - 1;
     grid[j][1] = queries[j]
  }
}

//ordena o grid para facilitar
grid.sort(function(a,b) {
    return b[0]-a[0] 
});

//exibe os K primeiros valores
let arrResult = [];
for(let i = 0; i < k ; i++) {
    arrResult[i] = grid[i][1]
}


console.log(arrResult)