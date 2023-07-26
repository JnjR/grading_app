// Using code to clculate grades

document.getElementById("calculate").addEventListener("click", grades);

function grades() {
  let numerator = prompt("Numerator: ");
  let denominator = prompt("Denominator: ");
  let grade = ((numerator / denominator) * 100);
  
  grade = parseFloat(grade).toFixed(0);

  alert("Your grade is " + grade + "%");
}
