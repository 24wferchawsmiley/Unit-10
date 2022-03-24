function askName() {
    var name = prompt("What is your name?");
    
    return name;
}

function askTemp() {
    var atemp = prompt("What Temperature do you want to convert? (Only enter Numbers)");
    return atemp;
}

function CTC(a) {
   var ctemp = (((a - 32) * 5) / 9);
   console.log(ctemp)
   return ctemp;
}

function FTC(a) {
   var ftemp = (((a * 9) / 5) + 32);
   
   return ftemp;
}

function askConvUnit() {
    var convUnit = prompt("Do you want to convert from F to C (enter 'c' for this option), ot from C to F (enter 'f' for this option)");
    
    return convUnit;
}
function conv(a, b, conv, d, e) {
    if (conv == "c") {
        var h = CTC(b);
        alert(`Hello ${a}, ${b} in Celsius is ${h}`);

    }else if (conv == "f") {
        var h = FTC(b);
        alert(`Hello ${a}, ${b} in Fahrenheit is ${h}`);
        console.log(e)
    }else {
        alert("No Input");
    }

}

conv(askName(), askTemp(), askConvUnit(), CTC(), FTC())