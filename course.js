const accordions=document.querySelectorAll(".accordion");

accordions.forEach((btn,index)=>{

btn.addEventListener("click",()=>{

closeAll();

btn.classList.add("active");

btn.nextElementSibling.style.display="block";

});

});

function closeAll(){

accordions.forEach(btn=>{

btn.classList.remove("active");

btn.nextElementSibling.style.display="none";

});

}

function nextLesson(current){

closeAll();

const next=current+1;

if(next<accordions.length){

accordions[next].classList.add("active");

accordions[next].nextElementSibling.style.display="block";

accordions[next].scrollIntoView({

behavior:"smooth",

block:"start"

});

}

}

function completeCourse(course){

    let student = JSON.parse(localStorage.getItem("studentData"));

    student.course = course;

    student.completed = true;

    student.completedDate = new Date().toISOString();

    localStorage.setItem("studentData", JSON.stringify(student));

    alert("🎉 Congratulations! You completed " + course);

    window.location = "student.html";

}