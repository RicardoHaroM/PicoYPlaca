class DataManager{
    static separateInputData(inputString){
        const inputArray=inputString.split(' ');
        return {
            plateNumber:inputArray[0],
            driveDate:inputArray[1],
            driveHour:inputArray[2],
        }
    }
}

module.exports = DataManager;