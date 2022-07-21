const DataManager = require('../helpers/dataManager');

const {exemptLettersPlates} = require('../consts/exemptPlates');
const {restrictionDays} = require('../consts/restrictionDays')

class LicensePlate{
    plateNumber;
    
    constructor(
        plateNumber
    ){
        this.plateNumber=plateNumber;
    }

    isAExemptPlate(){
        const descriptionLetters = DataManager.takeDescriptionLetters(this.plateNumber);
        if(exemptLettersPlates.includes(descriptionLetters)){
            return true;
        }

        return false;
    }

    isOnRestrictionDay(date){
        const dayNumber = date.getDay();

        if(dayNumber>5 | dayNumber<1) return false;
        
        const {restrictionNumberPlates} = restrictionDays[dayNumber];
        
        const lastDigit = this.plateNumber[this.plateNumber.length-1];

        if(restrictionNumberPlates.includes(Number(lastDigit))) return true;

        return false;
    }

    canBeOnRoadInADay(date){
        if(DateManager.isAHoliday(date)) return true;

        if(this.isOnRestrictionDay(date)) return false;

        return true
    }

    canBeOnRoadInAnHour(){
        
    }
}

module.exports = LicensePlate;