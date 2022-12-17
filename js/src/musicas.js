


function insertionSortA(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j > -1; j--) {
      if (arr[j + 1] > arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }

  return arr;
}

function insertionSortB(arr) {
    for (let i = 1; i < arr.length; i++) {
      for (let j = i - 1; j > -1; j--) {
        if (arr[j + 1] < arr[j]) {
          [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        }
      }
    }
  
    return arr;
}
  



let maisTocadas = insertionSortA(a)
/* console.log(maisTocadas)
 */

let menosTocadas = insertionSortB(b)
/* console.log(menosTocadas)
 */

let run = 0, first = 0, second = 0;
const newArr = [];
while(run < maisTocadas.length + menosTocadas.length){
   if(first > second){
      newArr[run] = menosTocadas.reverse()[second];
      second++;
   }else{
      newArr[run] = maisTocadas.reverse()[first];
      first++;
   }
   run++;
};


const half = Math.ceil(newArr.length / 2);    

const firstHalf = newArr.slice(0, half)
console.log(firstHalf)
return firstHalf


