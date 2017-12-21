const Test = require('assert');
const { punchTime, getHourAndMinute } = require('../punchtime');

describe("PM punch out time calculation", () => {
    it("should return pmOut time approprately for 8 hours work", () => {
        Test.deepEqual(punchTime('09:00','12:00','13:00','', 8), 
            ['09:00','12:00','13:00','18:00']);
        Test.deepEqual(punchTime('09:53','12:12','12:38','', 8), 
            ['09:53','12:12','12:38','18:19']);
    });
    it("should return pmOut time approprately for 6 hours work", () => {
        Test.deepEqual(punchTime('09:00','12:00','13:00','', 6), 
            ['09:00','12:00','13:00','16:00']);
    });
    it("should return empty pm in/out when morning hours is over working hours", () => {
        Test.deepEqual(punchTime('09:00','13:00','14:00','', 4), 
            ['09:00','13:00','','']);
        Test.deepEqual(punchTime('09:00','13:30','14:20','', 4), 
            ['09:00','13:30','','']);
   });
});

describe("AM punch in time calculation", () => {
    it("should return amIn time approprately for 8 hours work", () => {
        Test.deepEqual(punchTime('','12:00','13:00','18:00', 8), 
            ['09:00','12:00','13:00','18:00']);
        Test.deepEqual(punchTime('','12:12','12:38','18:19', 8), 
            ['09:53','12:12','12:38','18:19']);
    });
    it("should return pmOut time approprately for 6 hours work", () => {
        Test.deepEqual(punchTime('','12:00','13:00','16:00', 6), 
            ['09:00','12:00','13:00','16:00']);
    });
    it("should return empty pm in/out when morning hours is over working hours", () => {
        Test.deepEqual(punchTime('','13:00','14:00','18:00', 4), 
            ['','','14:00','18:00']);
        Test.deepEqual(punchTime('','13:00','13:40','18:00', 4), 
            ['','','13:40','18:00']);
   });
});


describe("Get Hour and Minute", () => {
    it("should return right hour and minute", () => {
        Test.deepEqual(getHourAndMinute('09:13'), ['09', '13']);
        Test.deepEqual(getHourAndMinute('00:00'), ['00', '00']);
    }); 
    it("should return 00:00 when no time input", () => {
        Test.deepEqual(getHourAndMinute(''), ['00', '00']);
    });

});