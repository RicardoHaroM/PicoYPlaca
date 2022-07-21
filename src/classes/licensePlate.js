const DataManager = require('../helpers/dataManager');
const DateManager = require('../helpers/dateManager')

const {exemptLettersPlates} = require('../consts/exceptions');
const {restrictionDays,restrictionHours} = require('../consts/restrictions')

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

    canBeOnRoadInAnHour(hour){
        const {morningSchedule,afternonSchedule} = restrictionHours;

        const driveHour = Number(hour.replace(':',''));

        if(morningSchedule.startHour<=driveHour&&morningSchedule.finishHour>=driveHour) return false
        
        if(afternonSchedule.startHour<=driveHour&&afternonSchedule.finishHour>=driveHour) return false
    
        return true;
    }

    canBeOnRoad(driveDate,driveHour){

        if(this.isAExemptPlate()) return true

        if(DateManager.isAHoliday(driveDate)) return true;

        if(this.canBeOnRoadInAnHour(driveHour)) return true;
        
        if(this.isOnRestrictionDay(driveDate)) return false;

        return true
    }

    
}

module.exports = LicensePlate;