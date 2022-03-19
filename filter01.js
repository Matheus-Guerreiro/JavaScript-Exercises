const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];

const newList = list.filter((numbers) => {
  return numbers % 2 === 0 && numbers % 5 === 0 ? numbers : null;
});

console.log(newList);
