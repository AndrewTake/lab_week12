

function selectSideNav(){
    const selector = document.querySelector("#side-nav");
    console.log(selector);
}
selectSideNav()


let darkTheme = () => {
    let switchDarkTheme = document.querySelector(".container");
    switchDarkTheme.classList.replace("light-theme", "dark-theme");
}
darkTheme()



// function selectStudents() {
// const students = [
//     { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
//     { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
//     { name: "Dax", grades: [ 88, 90, 89, 85 ] },
//     { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
//   ]
  
//   const studentsScholarship = []
  
//   for (let i = 0; i < 4; i ++) {
// 	let gradeTotal = 0 
// 	for (let j = 0; j < 4; j ++) {
// 		gradeTotal += students[i].grades[j]
// 	  }
// 	  if (gradeTotal / 4 > 80) {
// 		studentsScholarship.push(students[i])
// 	  }
//   }
  
//   console.log(studentsScholarship)
// }
// selectStudents()


// function test(named) {
//     console.log('Hello ' + named);
// }

// test('World');


// const greet = () => {
//     return ("hello world");
// };