const DateManager = require('../src/helpers/dateManager')

test('Check if a holiday date is a holiday',()=>{
    const date =new Date('02-28-2023');

    const result =DateManager.isAHoliday(date)

    expect(result).toBe(true);
})

test('Check if a non-holiday date is a holiday',()=>{
    const date =new Date('07-06-2023');

    const result =DateManager.isAHoliday(date)

    expect(result).toBe(false);
})