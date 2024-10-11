//destructuring
const course = {
    courseName: "Javascript 101",
    coursePrice: "999",
    courseInstructur: "Jeet prasad"
}
//console.log(course.courseName);

const {courseInstructur} = course
//console.log(Instructur);

const {courseInstructur: Instructur} = course
console.log(courseInstructur);

//json
{
    "courseName": "Javascript 101",
    "coursePrice": 999,
    "courseInstructur": "Jeet prasad"
    "IsLoggedIn": false
}
