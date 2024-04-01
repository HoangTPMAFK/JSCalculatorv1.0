const display = document.getElementById("display");
function appendToDisplay(input) {
    let numberRegex = /^\d+$/;
    if (input == '+' || input == '-' || input == '/' || input == '*') {
        let hasOperator = (display.value.indexOf('+') != -1 || display.value.indexOf('-') != -1 || display.value.indexOf('*') != -1 || display.value.indexOf('/') != -1);
        let firstNumberIsNegative = display.value.indexOf('(-') == 0;
        if (!hasOperator && display.value.length != 0) {
            display.value += input;
        } else {
            if (firstNumberIsNegative && !numberRegex.test(display.value.charAt(display.value.length - 1))) {
                display.value += input;
            }
        }
    } else {
        if (display.value.charAt(display.value.length - 1) == ')') {
            earse();
            display.value += (input + ')');
        } else
            display.value += input;
    }
}
function allClear() {
    display.value = '';
}
function calculate() {
    display.value = eval(display.value);
}
function enableNegative() {
    let hasOperator = (display.value.indexOf('+') != -1 || display.value.indexOf('-') != -1 || display.value.indexOf('*') != -1 || display.value.indexOf('/') != -1);
    let numberRegex = /^\d+$/;
    console.log(display.value.charAt(display.value.length - 1));
    if (!hasOperator && display.value.length != 0) {
        display.value = '(-' + display.value + ')';
    } else if (hasOperator && !numberRegex.test(display.value.charAt(display.value.length - 1)) && display.value.indexOf('(-') == -1) {
        s1 = display.value.charAt(display.value.length - 1);
        earse();
        display.value = '(-' + display.value + ')' + s1;
    } else if (hasOperator && numberRegex.test(display.value.charAt(display.value.length - 1))) {
        let pos = 0;
        if (display.value.indexOf('+') != -1) {
            pos = display.value.indexOf('+');
        } else if (display.value.indexOf('-') != -1) {
            pos = display.value.indexOf('-');
        } else if (display.value.indexOf('*') != -1) {
            pos = display.value.indexOf('*');
        } else {
            pos = display.value.indexOf('/');
        }
        let s1 = display.value.substr(0, pos);
        let s2 = display.value.charAt(pos);
        let s3 = display.value.substr(pos + 1);
        display.value = s1 + s2 + '(-' + s3 + ')';
    }
}
function enableDemical() {
    let pos = -1;
    if (display.value.indexOf('+') != -1) {
        pos = display.value.indexOf('+');
    } else if (display.value.indexOf('-') != -1) {
        pos = display.value.indexOf('-');
    } else if (display.value.indexOf('*') != -1) {
        pos = display.value.indexOf('*');
    } else if (display.value.indexOf('/') != -1) {
        pos = display.value.indexOf('/');
    }
    let firstNumberIsDemical = display.value.indexOf('.') != -1 && pos == -1;
    let secondNumberIsDemical = display.value.indexOf('.', pos) != -1;
    if (!firstNumberIsDemical) {
        display.value += '.';
    }
    else if (!secondNumberIsDemical) {
        display.value += '.';
    }
}
function earse() {
    s = display.value;
    display.value = s.slice(0, s.length - 1);
}