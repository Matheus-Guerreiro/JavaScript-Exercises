const companies = [
  { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
  { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975,},
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  { name: "Facebook", marketValue: 383,CEO: "Mark Zuckerberg", foundedOn: 2004,},
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 },
];

const newCompanies = companies.map((companies) => {
  const percentage = {
    name: companies.name,
    marketValue: companies.marketValue + (companies.marketValue / 10),
    CEO: companies.CEO,
    foundedOn: companies.foundedOn,
  };

  return percentage;
});

const yearCompanie = newCompanies.filter((year) => year.foundedOn < 2000);

const sumMKV = yearCompanie.reduce((acc, current) => acc + current.marketValue, 0)

console.log(sumMKV)