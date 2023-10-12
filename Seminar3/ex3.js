function PromoStudents(arr, medie){
    const medieStudent = arr.map(student =>  {
        return{
            nume: student.nume,
            note: student.note,
            medie: student.note.reduce((acc, nota) => acc + nota, 0) / student.note.length,
        };
    });
    return medieStudent.filter(student => student.medie >= medie)
};

const mediePromovare = 5;

const students = [
    {
        nume: "Ionut Vasile",
        note: [3, 5, 9, 10]
    },
    {
        nume: "Cezin Miguel",
        note: [8, 7, 10, 2]
    },
    {
        nume: "Ion Moromete",
        note: [9, 10, 8, 9]
    },
    {
        nume: "Maria Mihai",
        note: [7, 3, 3, 1]
    }
]

console.log(PromoStudents(students, mediePromovare))