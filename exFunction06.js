const people = [
  {
    salary: 500,
    children: 2,
  },
  {
    salary: 700,
    children: 3,
  },
  {
    salary: 200,
    children: 0,
  },
  {
    salary: 600,
    children: 1,
  },
  {
    salary: 400,
    children: 3,
  },
  {
    salary: -200,
    children: 2,
  },
];

function averageSalaryAndHigher(peopleInformation) {
  let i = 0;
  let averageSalary = 0;
  let averageChildren = 0;
  let higherSalary = 0;

  while (peopleInformation[i].salary > 0) {

    averageSalary = averageSalary + peopleInformation[i].salary
    averageChildren = averageChildren + peopleInformation[i].children
    peopleInformation[i].salary > higherSalary ? higherSalary = peopleInformation[i].salary : higherSalary = higherSalary
      i++
  }

  console.log(`A média salárial é: ${(averageSalary / i).toFixed(0)}`);
  console.log(`A média de crianças é: ${(averageChildren / i).toFixed(0)}`);
  console.log(`O maior salário é: ${higherSalary}`);
}

averageSalaryAndHigher(people);
