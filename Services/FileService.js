const fs = require('fs').promises;
module.exports=class FileService {
  static async getCity() {
    try {
      const fileData = await fs.readFile('./config/UserInput.txt', 'utf8');
      const data = fileData.replace(/\s/g, "");
      const parsedData = JSON.parse(data)
      return parsedData;
    } catch (e) {
      console.log(e);
    }
  }
}
