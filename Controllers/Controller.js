const FileService = require('./../Services/FileService');
const TimeAndWeatherService = require('./../Services/TimeAndWeatherService');
const CreateOutputService = require('./../Services/CreateOutputService');
const logger = require('./../Services/LoggingService');
const config = require('./../config/UserInput.json');

module.exports = async function getCityData(req, res) {
    try {
      const cityInfo = await TimeAndWeatherService.getTimeAndWeather(config.city);
      let output;
      if (cityInfo.error) {
        output = CreateOutputService.handleWrongCity(cityInfo);
        logger.error(output)
      } else {
        output = await CreateOutputService.createOutputCityObject(
          cityInfo,
          config.email,
        );
      }
      FileService.WriteFile(output);
      res.send(output);
    } catch (e) {
      logger.error(e.message);
      res.send('Something went wrong');
    }
  };
