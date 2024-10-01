//  CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendTODisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        if (display.value === "143") {
            display.value = "I Love You";
        } else if (display.value === "607") {
            display.value = "Miss na kita";
        } else if (display.value === "107") {
            display.value = "balik kana";
        } else if (display.value === "910") {
            display.value = "Sorry na";
    } else {
        display.value = eval(display.value);
    }
} catch (error) {
    display.value = "Error";
    }
}

