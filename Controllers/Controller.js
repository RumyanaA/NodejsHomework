const FileService = require('./../Services/FileService');
const TimeAndWeatherService = require('./../Services/TimeAndWeatherService');
const CreateOutputService = require('./../Services/CreateOutputService')
module.exports = class usersController {
  static async getCityData(req, res) {
    try {
      const fileData = await FileService.readFromFile();
      const cityInfo = await TimeAndWeatherService.getTimeAndWeather(fileData.city);
      const cityData = CreateOutputService.createOutputCityObject(cityInfo);
      FileService.WriteFile(cityData);
      res.send(cityData);
    } catch (e) {
      console.log(e);
    }
  }
};
