const table = (number) => {

 if(number > 10 || number < 1){

    console.log("Não aceitamos números menores que 1 e maiores que 10");

    return;
 }

  for(i = 1;i < 11; i++){

    const result = number * i;

     console.log(`${i} x ${number} = ${result}`);
  }



}

table();