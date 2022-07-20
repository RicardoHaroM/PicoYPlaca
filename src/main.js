const ConsoleManager=require('./helpers/consoleManager');
const DataManager = require('./helpers/dataManager');

const main =async()=>{
    const inputData = await ConsoleManager.getAnswerFromConsole('Ingrese su placa');

    const {plateNumber,driveDate,driveHour} = DataManager.separateInputData(inputData);

    console.log(plateNumber,driveDate,driveHour)
    
}

main();


