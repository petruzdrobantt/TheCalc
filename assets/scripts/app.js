const defaultResult = 0;
let result = defaultResult;

let logEntries = [];

function getUserInput(){
    return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBefore, calculationNumber){
    const calcDescription = `${resultBefore} ${operator} ${calculationNumber}`;
    outputResult(result, calcDescription);
}

function calculateResult(calculationType){
    const enteredNumber = getUserInput();
    initialResult = result;
    let mathOperator;
    if(calculationType === 'ADD'){
        result += +enteredNumber;
        mathOperator = '+';
    }
    else if(calculationType === 'SUB'){
        result -= +enteredNumber;
        mathOperator = '-';
    }
    else if(calculationType === 'MUL'){
        result *= +enteredNumber;
        mathOperator = '*';
    }
    else if(calculationType === 'SUB'){
        result /= +enteredNumber;
        mathOperator = '/';
    }

    createAndWriteLog(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, result);
}

function writeToLog(operation, initialResult, enteredNumber, result){
    const logEntry = {
        operation : operation,
        previousResult: initialResult,
        number : enteredNumber,
        newResult : result, 
    };
    logEntries.push(logEntry);
}

function add(){
    calculateResult('ADD');
}

function subtract(){
    calculateResult('SUB');
}

function multiply(){
    calculateResult('MUL');
}

function divide(){
    calculateResult('DIV');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide)