function update() {
    display.innerHTML = (disp.join(' '))
}

function isNumber(n) {
    return !isNaN(parseInt(n))
}

let disp = [0];
update();

function isSimbol(v) {
    return v === "+" || v === "-" || v === "x" || v === "/"
}


function addNumberToDisp(valor) {
    let last = disp[disp.length - 1];
    if (last == "0") {
        disp[disp.length - 1] = valor
    } else {
        disp[disp.length - 1] = last + valor
    }
}


function lastIsNegativeOperator() {
    return disp[disp.length - 1] == "-" && isSimbol(disp[disp.length - 2]);
}

function numero(valor) {
    let last = disp[disp.length - 1];
    if (isNumber(last)) {
        addNumberToDisp(valor);
    } else if (lastIsNegativeOperator()) {
        disp[disp.length - 1] = valor * -1
    } else {
        disp.push(valor)
    }
    update()
}


function hasNoDecimal(str) {
    return !str.includes(".")
}

function decimal() {
    let lastNum = disp[disp.length - 1];
    if (isNumber(lastNum) && hasNoDecimal(lastNum)) {
        disp[disp.length - 1] = lastNum + "."
    }
    update()
}

function reset() {
    disp = [0]
    update()
}



function simbol(s) {
    let last = disp[disp.length - 1];
    let secondLast = disp[disp.length - 2];
    let lastIsMinus = last == "-";
    let valorEsMenos = s == "-";

   

    if (lastIsMinus && isSimbol(secondLast)) {
        
        disp.pop()
       
        disp[disp.length - 1] = s
       
    } else if (lastIsMinus) {
        disp[disp.length - 1] = s
    } else if (isSimbol(last) && !lastIsMinus && valorEsMenos) {
        disp.push(s)
    } else if (isSimbol(last)) {
        disp[disp.length - 1] = s
    } else {
        disp.push(s)
    }
    update()
}


function result() {
    let actual = parseFloat(disp[0]);
    for (let i = 1; i < disp.length - 1; i += 2) {
        switch (disp[i]) {
            case '+':
                actual += parseFloat(disp[i + 1]);
                break;
            case '-':
                actual -= disp[i + 1];
                break;
            case '/':
                actual /= disp[i + 1];
                break;
            case 'x':
                actual *= disp[i + 1];
                break;
        }
    }
    disp = [actual]
    update()
}

