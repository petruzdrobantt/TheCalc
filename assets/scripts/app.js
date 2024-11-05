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
    const enteredNumber = getUserInput();
    initialResult = result;
    result += +enteredNumber;
    createAndWriteLog('+', initialResult, enteredNumber);
    writeToLog("ADD", initialResult, enteredNumber, result);
}

function subtract(){
    const enteredNumber = getUserInput();
    initialResult = result;
    result -= +enteredNumber;
    createAndWriteLog('-', initialResult, enteredNumber);
    writeToLog("SUB", initialResult, enteredNumber, result);
}

function multiply(){
    const enteredNumber = getUserInput();
    initialResult = result;
    result *= +enteredNumber;
    createAndWriteLog('*', initialResult, enteredNumber);
    writeToLog("MUL", initialResult, enteredNumber, result);
}

function divide(){
    const enteredNumber = getUserInput();
    initialResult = result;
    result /= +enteredNumber;
    createAndWriteLog('/', initialResult, enteredNumber);
    writeToLog("DIV", initialResult, enteredNumber, result);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide)