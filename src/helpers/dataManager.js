class DataManager{
    static separateInputData(inputString){
        const inputArray=inputString.split(' ');
        return {
            plateNumber:inputArray[0],
            driveDate:inputArray[1],
            driveHour:inputArray[2],
        }
    }

    static takeDescriptionLetters(plateNumber){
        if(plateNumber.length==7){
            return plateNumber.substring(0,2);
        }
        
        return plateNumber[1];
    }
}

module.exports = DataManager;