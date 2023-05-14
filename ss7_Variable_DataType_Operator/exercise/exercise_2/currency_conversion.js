function convert() {
    let from = document.getElementById('fromCurrency').value;
    let to = document.getElementById('toCurrency').value;
    let amount = document.getElementById('amount').value;
    let result;
    if (from == 'usd' && to == 'vnd') {
        result = amount * 23000;
    } else if (from == 'vnd' && to == 'usd') {
        result = amount / 23000;
    } else if (from == 'vnd' || from == 'usd') {
        result = amount;
    }
    document.getElementById('result').innerHTML = 'Result: ' + result;
}
