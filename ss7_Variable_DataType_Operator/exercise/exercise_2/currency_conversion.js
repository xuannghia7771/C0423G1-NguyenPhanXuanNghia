function convert() {
    let From = document.getElementById('fromCurrency').value;
    let To = document.getElementById('toCurrency').value;
    let Amount = document.getElementById('amount').value;
    let result;
    if (From == 'usd' && To == 'vnd') {
       result = Amount * 23000;
    } else if (From == 'vnd' && To == 'usd'){
        result = Amount / 23000;
    } else if (From == 'vnd' || From == 'usd'){
        result = Amount;
    }
    document.getElementById('result').innerHTML = 'Result: ' + result;
}
