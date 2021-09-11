const getFlag = (flag1, flag2) => {
    return `oi ${process.argv[process.argv.indexOf(flag1) + 1]}! ${process.argv[process.argv.indexOf(flag2) + 1]}`;
}

module.exports = getFlag('--name', '--greetings');

