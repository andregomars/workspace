var Test = require('assert');
var punchtime = require('../punchtime.js');

describe("Punch time calculation", () => {
    it("should return proper time", () => {
        Test.deepEqual(punchtime('09:00','12:00','13:00',''), 
            ['09:00','12:00','13:00','18:00']);
        Test.deepEqual(punchtime('09:53','12:12','12:38',''), 
            ['09:53','12:12','12:38','18:19']);
    });
});