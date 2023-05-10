let sohang1 = document.getElementById('numeric1');
let sohang2 = document.getElementById('numeric2');
function addition() {
    let result1 = +sohang1.value + +sohang2.value;
    document.getElementById('Result').innerHTML = 'Result Addition: ' + result1;
}
function subtraction() {
    let result2 = +sohang1.value - +sohang2.value;
    document.getElementById('Result').innerHTML = 'Result Subtraction: ' + result2;
}
function multiplication() {
    let result3 = +sohang1.value * +sohang2.value;
    document.getElementById('Result').innerHTML = 'Result Multiplication: ' + result3;
}
function division() {
    let result4 = +sohang1.value / +sohang2.value;
    document.getElementById('Result').innerHTML = 'Result Division: ' + result4;
}