test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')

    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
    
    expect(expected).toBe(dollars);
})

test("One dollar should be 106.58333333333334 yen", function(){
    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(1)
    const expected = (1/1.2)*127.9; 
    
    expect(expected).toBe(yen);
})

test("One yen should be 0.00625488663 pounds", function(){
    const { fromYenToPound } = require('./app.js')

    const pounds = fromYenToPound(1)
    const expected = (1/127.9)*0.8; 
    
    expect(expected).toBe(pounds);
})