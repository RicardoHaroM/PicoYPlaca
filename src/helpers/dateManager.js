const { holidayDates } = require("../consts/exceptions");

class DateManager{
    static isAHoliday(date){
        
        const day = date.getDate();
        const month = date.getMonth()+1;

        if(holidayDates.includes(`${day}/${month}`)){
            return true;
        }

        return false;
    }
}

module.exports= DateManager;