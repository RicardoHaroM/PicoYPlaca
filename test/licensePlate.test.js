const LicensePlate = require('../src/classes/licensePlate')

test('Check if a taxi plate is a exempt plate',()=>{
    const taxiLicensePlate = new LicensePlate('MAA-5025')
    const result = taxiLicensePlate.isAExemptPlate();

    expect(result).toBe(true);
})

test('Check if a normal plate is a exempt plate',()=>{
    const particularLicensePlate = new LicensePlate('PCA-9918')
    const result = particularLicensePlate.isAExemptPlate();

    expect(result).toBe(false);
})

test('Check if a license plate is on a restriction day',()=>{
    const licensePlate = new LicensePlate('PCA-9951')
    const date = new Date('07/25/2022')

    const result = licensePlate.isOnRestrictionDay(date)

    expect(result).toBe(true);
})

test('Check if a wekend day is a restriction day',()=>{
    const licensePlate = new LicensePlate('PCA-9951')
    const date = new Date('07/31/2022')

    const result = licensePlate.isOnRestrictionDay(date)

    expect(result).toBe(false);
})

test('Check if you can be on road in an morning restriction hour',()=>{
    const licensePlate = new LicensePlate('PCA-9951')

    const result = licensePlate.canBeOnRoadInAnHour(800);

    expect(result).toBe(false)
})

test('Check if you can be on road in an afternon restriction hour',()=>{
    const licensePlate = new LicensePlate('PCA-9951')

    const result = licensePlate.canBeOnRoadInAnHour(1930);

    expect(result).toBe(false)
})

test('Check if you can be on road in a non-restriction hour',()=>{
    const licensePlate = new LicensePlate('PCA-9951')

    const result1 = licensePlate.canBeOnRoadInAnHour(600);
    const result2 = licensePlate.canBeOnRoadInAnHour(1000);
    const result3 = licensePlate.canBeOnRoadInAnHour(1530);
    const result4 = licensePlate.canBeOnRoadInAnHour(2030);

    expect(result1).toBe(true)
    expect(result2).toBe(true)
    expect(result3).toBe(true)
    expect(result4).toBe(true)
})
