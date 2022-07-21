const ConsoleManager=require('./helpers/consoleManager');
const DataManager = require('./helpers/dataManager');
const DateManager = require('./helpers/dateManager');
const LicensePlate = require('./classes/licensePlate')

const main =async()=>{
    // const inputData = await ConsoleManager.getAnswerFromConsole('Ingrese su placa');

    // const {plateNumber,driveDate,driveHour} = DataManager.separateInputData(inputData);

    const licensePlate = new LicensePlate('PCA-9951')

    const result = licensePlate.canBeOnRoadInAnHour(1930);

}

main();


