import { readFile } from "fs/promises";

async function getStudent() {
  try {
    const [studentJSONData, coursesJSONData, gradesJSONData] = await Promise.all([
      readFile("student.json"),
      readFile("courses.json"),
      readFile("grades.json"),
    ]);
  
    const [student, courses, grades] =[
      JSON.parse(studentJSONData),
      JSON.parse(coursesJSONData),
      JSON.parse(gradesJSONData),
    ]; 
    
    console.log(`student: ${student.name}`);
    console.log(`courses: ${courses.length}`);
    console.log(`grades: ${grades.length}`);
  
  } catch (error) {
    console.error(error.message)
  }
 
}

getStudent();