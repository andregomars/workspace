var Test = require('assert');
var punchtime = require('../punchtime');

describe("Punch time calculation", () => {
    it("should return pmOut time approprately for 8 hours work", () => {
        Test.deepEqual(punchtime('09:00','12:00','13:00','', 8), 
            ['09:00','12:00','13:00','18:00']);
        Test.deepEqual(punchtime('09:53','12:12','12:38','', 8), 
            ['09:53','12:12','12:38','18:19']);
    });
    it("should return pmOut time approprately for 6 hours work", () => {
        Test.deepEqual(punchtime('09:00','12:00','13:00','', 6), 
            ['09:00','12:00','13:00','16:00']);
    });
    it("should return empty pm in/out when morning hours is over working hours", () => {
        Test.deepEqual(punchtime('09:00','13:00','14:00','', 4), 
            ['09:00','13:00','','']);
        Test.deepEqual(punchtime('09:00','13:30','14:20','', 4), 
            ['09:00','13:30','','']);
   });


});