const DataManager = require('../src/helpers/dataManager');

test('Separate the input data in object properties',()=>{
    
    let inputData ='PCW-8909 07/07/22 14:00'

    const result = DataManager.separateInputData(inputData);
    
    expect(result).toStrictEqual({
        plateNumber:'PCW-8909',
        driveDate:'07/07/22',
        driveHour:'14:00',
    })
});

test('Take 2 description letters',()=>{

    const result = DataManager.takeDescriptionLetters('CD-0123');
    
    expect(result).toStrictEqual('CD')
});

test('Take 1 description letter',()=>{

    const result = DataManager.takeDescriptionLetters('PAC-0123');
    
    expect(result).toStrictEqual('A')
});