let number = 12345
number =  number.toString()
let secretNumber = 365
secretNumber =  secretNumber.toString()
let element = false
for(let i = 0 ; i <= number.length ; i++) {

    tempNumber = number.replace(i.toString(), '')
    for(let j = 0 ; j <= number.length ; j++) {
        tempNumber =  tempNumber.replace(j.toString(), '')

        if(tempNumber == secretNumber) {
            element = true
        } 

    }

}

console.log(element)


