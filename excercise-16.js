function totalDigitRekursif(angka) {
    var numberTostring = String(angka);
    if (numberTostring.length === 0) {
        return 0;
    }
    return Number(numberTostring[0]) + totalDigitRekursif(numberTostring.slice(1));
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5