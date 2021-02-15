const password = process.env.PASSWORD;

const authenticate = async function (userPass) {
    if (password != userPass) {
        return false;
    };
    return true;
};

module.exports.autoload = false