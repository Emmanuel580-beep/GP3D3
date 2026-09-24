
const student = JSON.parse(localStorage.getItem("studentData"));

if(student){
const paid=localStorage.getItem("certificatePaid");

if(!paid){

window.location="student.html";

}

document.getElementById("studentName").textContent = student.name;

document.getElementById("courseName").textContent = student.course;

// Training year from registration
document.getElementById("trainingYear").textContent = student.trainingYear;

// Permanent certificate number
document.getElementById("certNumber").textContent = year = student.trainingYear;

const random = student.certificateNumber
    ? student.certificateNumber.split("-").pop()
    : Math.floor(100000 + Math.random()*900000);

document.getElementById("certNumber").textContent = `GP3D-${year}-${random}`;
}

// Wait until images finish loading
window.onload = function(){

const button = document.getElementById("downloadBtn");

button.addEventListener("click", downloadCertificate);

};

function downloadCertificate(){

const certificate=document.getElementById("certificate");

html2pdf()

.set({

margin:0,

filename:`${student.name}-GP3D-Certificate.pdf`,

image:{type:"jpeg",quality:1},

html2canvas:{

scale:3,

useCORS:true,

scrollY:0

},

jsPDF:{

unit:"px",

format:[1123,794],

orientation:"landscape"

},

pagebreak:{mode:["avoid-all"]}

})

.from(certificate)

.save();

}