const moment = require('moment');

/*
params: 09:00, 12:00, 13:00, 
*/
const punchTime = (amIn, amOut, pmIn, pmOut, hours) => {
    const y = moment().get('year');
    const m = moment().get('month');
    const d = moment().get('date');

    let [amInHour, amInMinute] = getHourAndMinute(amIn);
    const [amOutHour, amOutMinute] = getHourAndMinute(amOut);
    const [pmInHour, pmInMinute] = getHourAndMinute(pmIn);
    let [pmOutHour, pmOutMinute] = getHourAndMinute(pmOut);

    let m_amIn = moment([y,m,d, amInHour, amInMinute]);
    const m_amOut = moment([y,m,d, amOutHour, amOutMinute]);
    const m_pmIn = moment([y,m,d, pmInHour, pmInMinute]);
    let m_pmOut = moment([y,m,d, pmOutHour, pmOutMinute]);

    debugger;
    if (moment().startOf('day').diff(m_amIn) === 0) {
        const hoursLeft = hours * 60 - m_pmOut.diff(m_pmIn, 'm');
        if (hoursLeft <= hours) {
            amIn = '';
            amOut = '';
        }
        else {
            m_amIn = m_amOut.subtract(hoursLeft, 'm');
            amInHour = m_amIn.get('hour').toString().padStart(2, '0');
            amInMinute = m_amIn.get('minute').toString().padStart(2, '0');
            amIn = amInHour + ':' + amInMinute;
        }
        return  [amIn, amOut, pmIn, pmOut];
    }

    if (moment().startOf('day').diff(m_pmOut) === 0) {
        const hoursLeft = hours * 60 - m_amOut.diff(m_amIn, 'm');
        if (hoursLeft <= hours) {
            pmIn = '';
            pmOut = '';
        }
        else {
            m_pmOut = m_pmIn.add(hoursLeft, 'm');
            pmOutHour = m_pmOut.get('hour').toString().padStart(2, '0');
            pmOutMinute = m_pmOut.get('minute').toString().padStart(2, '0');
            pmOut = pmOutHour + ':' + pmOutMinute;
        }
        return  [amIn, amOut, pmIn, pmOut];
    }

    return  [amIn, amOut, pmIn, pmOut];
};

const getHourAndMinute = (time) => {
    return time.length === 0 ? ['00', '00'] : time.split(':');
}


module.exports = { 
    punchTime: punchTime,
    getHourAndMinute: getHourAndMinute
}