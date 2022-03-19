const numberOne = 3
const numberTwo = 3
const numberThree = 3
const numberFour = 3

if (numberOne % 2 === 0 && numberTwo % 2 === 0 && numberThree % 2 === 0 && numberFour % 2 === 0) {
    console.log("Todos números são pares")
} else if(numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThree % 2 !== 0 && numberFour % 2 !== 0){
    console.log("Todos números são impares")
} else{
    console.log("Tudo misturado, impares e pares")
}