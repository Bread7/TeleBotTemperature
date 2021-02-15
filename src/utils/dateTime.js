// Get Date and Time
const moment = require("moment");

const date = async function () {
    return moment();
};

const dayNightCheck = async function () {
    const currentHour = moment.hour(Number);
    if (currentHour > 12) {
        return "PM";
    } else {
        return "AM";
    };
};

module.exports = {
    date,
    dayNightCheck
};
