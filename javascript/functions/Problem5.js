function calculateAverage (list_of_Scores) {
    let average = list_of_Scores.reduce((a,b) => a + b) / list_of_Scores.length;
    return average;
}

let getLetterGrade = (AVG_Scores) => {
    if (AVG_Scores >= 90) return 'A';
    if (AVG_Scores >= 80) return 'B';
    if (AVG_Scores >= 70) return 'C';
    if (AVG_Scores >= 60) return 'D';
    return 'F';
}

function calculateFinalGrade (scores,Avg,letter) {
    return `Final Grade: ${Avg(scores)} (${letter(Avg(scores))})`;
}

const student1Scores = [85, 90, 80, 95, 75];
const student2Scores = [70, 65, 80, 75, 70];

console.log(`Student 1 ` + calculateFinalGrade(student1Scores, calculateAverage, getLetterGrade));
console.log(`Student 2 ` + calculateFinalGrade(student2Scores, calculateAverage, getLetterGrade));
