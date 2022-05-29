const { DateTime } = require('luxon');
const writeToFile = require('../../services/writefile');

module.exports = {
    info: (type, ...m) => writeToFile(type, `[${DateTime.local().toFormat('yyyy-MM-dd HH:mm:ss')}] [INFO] `, ...m),
    error:(type, ...m) => writeToFile(type, `[${DateTime.local().toFormat('yyyy-MM-dd HH:mm:ss')}] [ERROR] `, ...m),
}