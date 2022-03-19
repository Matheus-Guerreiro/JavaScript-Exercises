const aplication = (initialInvestedValue, currentInvestmentValue, timeInMonths) => {

  const result = (currentInvestmentValue - initialInvestedValue) / (initialInvestedValue * timeInMonths);

  console.log(`${(result * 100).toFixed(2)}%`);

}


aplication(2000, 2600, 12);