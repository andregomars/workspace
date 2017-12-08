const { punchTime } = require('./punchtime');

if (process.argv.length < 3) {
    console.log('Please provide punch times');
    process.exit();
}

let hours = 8; //default working hours is 8
if (process.argv.length === 4) {
    hours = process.argv[3];
}
 
const [amIn, amOut, pmIn, pmOut] = process.argv[2].split(',').map(e=>e.trim());
const output = punchTime(amIn, amOut, pmIn, pmOut, hours);

console.log(output);

