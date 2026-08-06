const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let num1 = "";
let operator = null;
let num2 = null;

const getHundreth = (num) => {
    return num / 100;
}

const getQuotient = (num1, num2) => {
    return num1 / num2;
};

const getProduct = (num1, num2) => {
    return num1 * num2;
};

const getSum = (num1, num2) => {
    return num1 + num2;
};

const getDifference = (num1, num2) => {
    return num1 - num2;
};

const operate = (operator, num1, num2) => {
    switch (operator) {
        case "%": return getHundreth(num);
        case "/": return getQuotient(num1, num2);
        case "*": return getProduct(num1, num2);
        case "+": return getSum(num1, num2);
        case "-": return getDifference(num1, num2);
        default: return num2;
    }
};

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (button.className === "clear") {
            num1 = 0;
            operator = null;
            num2 = null;
            display.textContent = "0";
            return;
        }
        if (value === "=") {
            if (operator && num2 !== null) {
                const result = operate(operator, Number(num1), Number(num2));
                display.textContent = result;
                num1 = result;
                operator = null;
                num2 = null;
            }
            return
        }
        if (["%", "/", "*", "+", "-"].includes(value)) {
            operator = value;
            return;
        }
        if (!operator) {
            num1 = num1 === 0 ? value : num1 + value;
            display.textContent = num1;
        } else {
            num2 = num2 === null ? value : num2 + value;
            display.textContent = num2;
        }
    })
})