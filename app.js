function askName() {
    var name = prompt("What is your name?");
    
    return name;
}

function askTemp() {
    var atemp = prompt("What Temperature do you want to convert?");
    return atemp;
}

function CTC() {
   var ctemp = (((a - 32) * 5) / 9);
   
   return ctemp;
}

function FTC() {
   var ftemp = (((a * 9) / 5) + 32);
   
   return ftemp;
}

function askConvUnit() {
    var convUnit = prompt("What do you want to convert your temperature to?");
    
    return convUnit;
}

function conv(a, b, conv, d, e) {
    if (conv == "c") {
        alert(`Hello ${a}, ${b} in Celsius is ${d}`);
        console.log(d)

    }else if (conv == "f") {
        alert(`Hello ${a}, ${b} in Fahrenheit is ${e}`);
        console.log(e)
    }else {
        alert("No Input");
    }

}

conv(askName(), askTemp(), askConvUnit(), CTC(), FTC()