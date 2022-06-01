/* 
Notes 
  circle sandwhiches = 0;
  square sandwhiches = 1;
  number of sandwhiches are equal to the number of students;
  sandwhiches are placed in a stack;
  if the student at the front of the queue prefers the sandwhich on the top of the stack, they take the sandwhich and leave the queue
  if the student doesn't pefer the sandwhich, they will leave the sandwhich and go to end of the queue
  This continues UNTIL no queue students want to take the top sandwhich (so people in front of queue don't want to take sandwhich on top of stack)
  Sounds like if first student of array doesn't like 'last sandwhich' of array, then they get back in line and sandwhich remains
  two arrays = array1 is students, 0 index is the front of the queue (aka beginning of students array) and array2 is sandwhiches, 0 index is the top of the stack (last in last out)
  Sounds like we are using POP to remove sandwhiches when they are taken, SHIFT to remove student from front of line(whether they choose a sandwhich or not), and PUSH to move students from front of line to back of line when they don't pick the top sandwhich
  final thing returned will be the length of the students array, if empty then all students have eaten, but if any number remains then some students did not eat
  */

//P: two arrays of integers, 0 and 1
//R: integer; returning the length of the student array to determine if all students have selected their sandwhich of choice and left the line
//E: students = [1,1,0,0] and sandwhiches = [0,1,0,1] // 0
//P: create student stack = to student variable/sandwhich stack equal to sandwhich variable; for loop to go through the two arrays;
//   conditionals regarding if the student preference is equal to the sandwhich type and what to do to the student stack in both situations

// Function declaration
function countStudents(students, sandwhiches) {
  let count = 0;
  while (students.length !== 0) {
    let firstStudent = students.shift();
    if (firstStudent === sandwhiches[0]) {
      sandwhiches.shift();
      count = 0;
    } else {
      students.push(firstStudent);
      if (students.length < count) {
        break;
      }
      count++;
    }
  }
  return students.length;
}

function countStudents(students, sandwhiches) {
  while (students.indexOf(sandwhiches[0]) !== -1) {
    let firstStudent = students.shift();
    if (firstStudent === sandwhiches[0]) {
      sandwhiches.shift();
    } else {
      students.push(firstStudent);
    }
  }
  return students.length;
}

// Stack DSA Practice
function countStudents(students, sandwhiches) {
  while (students.indexOf(sandwhiches[0]) !== -1) {
    let firstStudent = students.shift();
    if (firstStudent === sandwhiches[0]) {
      sandwhiches[0].shift();
    } else {
      students.push(firstStudent);
    }
  }
  return students.length;
}
