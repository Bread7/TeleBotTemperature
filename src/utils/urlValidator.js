// Validate URL format
// https://temptaking.ado.sg/group/<id>
const regex = new RegExp('/https?:\/\/(temptaking\.)(ado\.)(sg)\/(group)\//g');

const urlValidator = async function (url) {
    // Must include "https://"
    if (regex.test(url)) {
        return true;
    }
    return false;
};

module.exports = {
    urlValidator,
};
