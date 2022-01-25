const fs = require('fs').promises;
const os = require('os');

module.exports = class FileService {
  static WriteFile(cityData) {
    fs.appendFile('./config/Output.txt', cityData + os.EOL, 'UTF-8', { flags: 'a+' });
  }
};
