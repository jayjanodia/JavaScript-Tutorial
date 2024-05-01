// Calculate the grade of a student

// Avg Grade:
// 1-59 : F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-99: A
// 100 : A+

const marks = [100, 100, 100];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let total_marks = 0;
  // let count_marks = 0;
  for (let mark of marks) {
    total_marks += mark;
    // count_marks += 1;
  }
  const count_marks = marks.length;
  const avg_marks = total_marks / count_marks;

  if (avg_marks < 60) return "F grade";
  if (avg_marks < 70) return "D grade";
  if (avg_marks < 80) return "C grade";
  if (avg_marks < 90) return "B grade";
  if (avg_marks < 100) return "A grade";
  return "A+ grade";
  /* else if (avg_marks >= 60 && avg_marks < 70) return "D Grade";
    else if (avg_marks >= 70 && avg_marks < 80) return "C Grade";
    else if (avg_marks >= 80 && avg_marks < 90) return "B Grade";
    else if (avg_marks >= 90 && avg_marks < 100) return "A Grade";
    else return "A+ Grade"; */
}
