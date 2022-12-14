// program for a simple calculator
let result;

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         result = number1 + number2;
         document.write(number1 + operator + number2 + "=" + result);
        break;

    case '-':
         result = number1 - number2;
         document.write(number1 + operator + number2 + "=" + result);
        break;

    case '*':
         result = number1 * number2;
         document.write(number1 + operator + number2 + "=" + result);
        break;

    case '/':
         result = number1 / number2;
         document.write(number1 + operator + number2 + "=" + result);
        break;

    default:
        document.writeln('Invalid operator');
        break;
}