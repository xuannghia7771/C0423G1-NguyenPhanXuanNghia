let soHang1 = document.getElementById('numeric1');
let soHang2 = document.getElementById('numeric2');
function addition() {
    let result1 = +soHang1.value + +soHang2.value;
    document.getElementById('resultesult').innerHTML = 'Result Addition: ' + result1;
}
function subtraction() {
    let result2 = +soHang1.value - +soHang2.value;
    document.getElementById('result').innerHTML = 'Result Subtraction: ' + result2;
}
function multiplication() {
    let result3 = +soHang1.value * +soHang2.value;
    document.getElementById('result').innerHTML = 'Result Multiplication: ' + result3;
}
function division() {
    let result4 = +soHang1.value / +soHang2.value;
    document.getElementById('result').innerHTML = 'Result Division: ' + result4;
}