const ConsoleManager=require('./helpers/consoleManager');
const DataManager = require('./helpers/dataManager');
const LicensePlate = require('./classes/licensePlate')

const main =async()=>{

    const inputData = await ConsoleManager.getAnswerFromConsole('Please enter the license plate number, the date and time you want to be on the road, separated by a space.\nEx: PCW-8909 08-23-2022 14:00\n');

    if(!DataManager.isTheInputFormatCorrect(inputData)){
        console.log("The input does not have the correct format");
        return;
    }

    const {plateNumber,driveDate,driveHour} = DataManager.separateInputData(inputData);

    const carLicensePlate = new LicensePlate(plateNumber);

    if(!carLicensePlate.canBeOnRoad(new Date(driveDate),driveHour)){
        console.log('The car can not be on road because it has pico y placa restriction')
        return
    }

    console.log('The car can be on road because it does not have pico y placa restriction')

}

main();


