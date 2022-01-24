const FileService = require('./../Services/FileService');
const TimeAndWeatherService = require('./../Services/TimeAndWeatherService');
const CreateOutputService = require('./../Services/CreateOutputService');
const logger = require('./../Services/LoggingService');

module.exports = class usersController {
  static async getCityData(req, res) {
    try {
      const fileData = await FileService.readFromFile();
      const cityInfo = await TimeAndWeatherService.getTimeAndWeather(fileData.city);
      let output;
      if (cityInfo.error) {
        output = CreateOutputService.handleWrongCity(cityInfo);
      } else {
        output = await CreateOutputService.createOutputCityObject(
          cityInfo,
          fileData.email,
        );
      }
      FileService.WriteFile(output);
      res.send(output);
    } catch (e) {
      logger.error(e.message);
    }
  }
};
