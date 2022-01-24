const fs = require('fs').promises;
module.exports = class FileService {
  static async readFromFile() {
    const fileData = await fs.readFile('./config/UserInput.txt', 'utf8');
    const data = fileData.replace(/\s/g, '');
    const parsedData = JSON.parse(data);
    return parsedData;
  }

  static async WriteFile(cityData) {
    fs.appendFile('./config/Output.txt', cityData, 'UTF-8', {flags: 'a+'});
  }
};
