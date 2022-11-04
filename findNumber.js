let number = 12345
number =  number.toString()

for(let i = 1 ; i <= number.length ; i++) {

    tempNumber = number.replace(i.toString(), '⭕')
    console.log(tempNumber)
   
}