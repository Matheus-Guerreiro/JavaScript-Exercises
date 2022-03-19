const discountGenerator = (clientName, totalPurchaseAmount, firstPurchase, cashPayment) => {

  if (firstPurchase && cashPayment) {

    if(totalPurchaseAmount >= 1000){
        console.log(`
        Agradecemos sua compra ${clientName}!!
        Valor da compra:${totalPurchaseAmount}
        Valor compra com desconto:${totalPurchaseAmount - ((totalPurchaseAmount * 30) / 100)}
        Seu desconto foi de 30%`);
    }
    else if(totalPurchaseAmount < 500){
        console.log(`
        Agradecemos sua compra ${clientName}!!
        Valor da compra:${totalPurchaseAmount}
        Valor compra com desconto:${totalPurchaseAmount - ((totalPurchaseAmount * 20) / 100)}
        Seu desconto foi de 20%`);
    }
    else{
        console.log(`
        Agradecemos sua compra ${clientName}!!
        Valor da compra:${totalPurchaseAmount}
        Valor compra com desconto:${totalPurchaseAmount - ((totalPurchaseAmount * 25) / 100)}
        Seu desconto foi de 25%`);
    }

  }
  if (firstPurchase && !cashPayment) {
      
    if(totalPurchaseAmount >= 1000){
        console.log(`
        Agradecemos sua compra ${clientName}!!
        Valor da compra:${totalPurchaseAmount}
        Valor compra com desconto:${totalPurchaseAmount - ((totalPurchaseAmount * 20) / 100)}
        Seu desconto foi de 20%`);
    }
    else if(totalPurchaseAmount < 500){
        console.log(`
        Agradecemos sua compra ${clientName}!!
        Valor da compra:${totalPurchaseAmount}
        Valor compra com desconto:${totalPurchaseAmount - ((totalPurchaseAmount * 10) / 100)}
        Seu desconto foi de 10%`);
    }
    else{
        console.log(`
        Agradecemos sua compra ${clientName}!!
        Valor da compra:${totalPurchaseAmount}
        Valor compra com desconto:${totalPurchaseAmount - ((totalPurchaseAmount * 15) / 100)}
        Seu desconto foi de 15%`);
    }

  }

  if(!firstPurchase && cashPayment){

    if(totalPurchaseAmount >= 1000){
        console.log(`
        Agradecemos sua compra ${clientName}!!
        Valor da compra:${totalPurchaseAmount}
        Valor compra com desconto:${totalPurchaseAmount - ((totalPurchaseAmount * 20) / 100)}
        Seu desconto foi de 20%`);
    }
    else if(totalPurchaseAmount < 500){
        console.log(`
        Agradecemos sua compra ${clientName}!!
        Valor da compra:${totalPurchaseAmount}
        Valor compra com desconto:${totalPurchaseAmount - ((totalPurchaseAmount * 10) / 100)}
        Seu desconto foi de 10%`);
    }
    else{
        console.log(`
        Agradecemos sua compra ${clientName}!!
        Valor da compra:${totalPurchaseAmount}
        Valor compra com desconto:${totalPurchaseAmount - ((totalPurchaseAmount * 15) / 100)}
        Seu desconto foi de 15%`);
    }

  }

  if(!firstPurchase && !cashPayment){

    if(totalPurchaseAmount >= 1000){
        console.log(`
        Agradecemos sua compra ${clientName}!!
        Valor da compra:${totalPurchaseAmount}
        Valor compra com desconto:${totalPurchaseAmount - ((totalPurchaseAmount * 10) / 100)}
        Seu desconto foi de 10%`);
    }
    else if(totalPurchaseAmount < 500){
        console.log(`
        Agradecemos sua compra ${clientName}!!
        Valor da compra:${totalPurchaseAmount}
        Você não ganhou desconto :/, mas não se preocupe, na sua proxima compra você vai ganhar:${Math.random() * (20 - 10) + 10}% de desconto`);
    }
    else{
        console.log(`
        Agradecemos sua compra ${clientName}!!
        Valor da compra:${totalPurchaseAmount}
        Valor compra com desconto:${totalPurchaseAmount - ((totalPurchaseAmount * 5) / 100)}
        Seu desconto foi de 5%`);
    }

  }else{}




}



discountGenerator("Matheus", 1300, true, true);