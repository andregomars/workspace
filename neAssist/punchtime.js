const moment = require('moment');

/*
params: 09:00, 12:00, 13:00, 
*/
const punchtime = (amIn, amOut, pmIn, pmOut) => {
    const y = moment().get('year');
    const m = moment().get('month');
    const d = moment().get('date');

    const [amInHour, amInMinute] = amIn.split(':');
    const [amOutHour, amOutMinute] = amOut.split(':');
    const [pmInHour, pmInMinute] = pmIn.split(':');

    const m_amIn = new moment([y,m,d, amInHour, amInMinute]);
    const m_amOut = new moment([y,m,d, amOutHour, amOutMinute]);
    const m_pmIn = new moment([y,m,d, pmInHour, pmInMinute]);

    debugger;
    const m_pmOut = m_pmIn.add(8 * 60 - m_amOut.diff(m_amIn, 'm'), 'm');
    const pmOutHour = m_pmOut.get('hour').toString().padStart(2, '0');
    const pmOutMinute = m_pmOut.get('minute').toString().padStart(2, '0');
    pmOut = pmOutHour + ':' + pmOutMinute;

    return  [amIn, amOut, pmIn, pmOut];
};

module.exports = punchtime;