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

        const formatNormalPlates4Numbers=/\w\w\w-\d\d\d\d/
        const formatNormalPlates3Numbers=/\w\w\w-\d\d\d/
        if(!formatNormalPlates4Numbers.test(plateNumber)&&!formatNormalPlates3Numbers.test(plateNumber)){
            return plateNumber.substring(0,2);
        }

        return plateNumber[1];
    }

    static isTheInputFormatCorrect(inputData){
        const formatNormalPlates4Numbers = /\w\w\w-\d\d\d\d \d\d-\d\d-\d\d\d\d \d\d:\d\d/
        const formatNormalPlates3Numbers = /\w\w\w-\d\d\d\d \d\d-\d\d-\d\d\d\d \d\d:\d\d/
        const formatStatePlates4Numbers = /\w\w-\d\d\d\d \d\d-\d\d-\d\d\d\d \d\d:\d\d/
        const formatStatePlates3Numbers = /\w\w-\d\d\d\d \d\d-\d\d-\d\d\d\d \d\d:\d\d/
        
        if(formatNormalPlates4Numbers.test(inputData)) return true;
        if(formatNormalPlates3Numbers.test(inputData)) return true;
        if(formatStatePlates4Numbers.test(inputData)) return true;
        if(formatStatePlates3Numbers.test(inputData)) return true;
        
        return false;
    }

}

module.exports = DataManager;