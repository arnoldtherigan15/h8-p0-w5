function kaliTerusRekursif(angka) {
    var angkaString = String(angka);
    if (angkaString.length === 1) {
        return angkaString;
    }
    var result = 1;
    for (var i = 0; i < angkaString.length; i++) {
        result *= Number(angkaString[i]);
    }
    return kaliTerusRekursif(result);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6