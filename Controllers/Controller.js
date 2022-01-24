const FileService = require('./../Services/FileService');
const TimeAndWeatherService = require('./../Services/TimeAndWeatherService');
const CreateOutputService = require('./../Services/CreateOutputService');
module.exports = class usersController {
  static async getCityData(req, res) {
    try {
      const fileData = await FileService.readFromFile();
      const cityInfo = await TimeAndWeatherService.getTimeAndWeather(fileData.city);
      let output;
      if (cityInfo.error) {
        output = CreateOutputService.handleWrongCity(cityInfo);
      } else {
        output = CreateOutputService.createOutputCityObject(cityInfo);
      }
      FileService.WriteFile(output);
      res.send(output);
    } catch (e) {
      console.log(e);
    }
  }
};