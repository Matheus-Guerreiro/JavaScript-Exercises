const students = [
    {name: "Rodolfo", testGrade: 7},
    {name: "Maria", testGrade: 5},
    {name: "João", testGrade: 8},
    {name: "Bruno", testGrade: 9},
    {name: "Carla", testGrade: 3},
    {name: "Ana", testGrade: 2},
    {name: "Julio", testGrade: 10},


];

const newStudents = students.map ((students) => {

    
    const newStudents = {
        name: students.name,
        finalResult: students.testGrade >= 7 ? "aproveed" : "desaproveed",  
    };

    return newStudents;
})

console.log(newStudents);