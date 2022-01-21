const FileService = require('./../Services/FileService');
const TimeAndWeatherService = require('./../Services/TimeAndWeatherService');
module.exports = class usersController {
  static async getCityData(req, res) {
    try {
      let cityData = {};
      const fileData = await FileService.getCity();
      const cityInfo = await TimeAndWeatherService.getTimeAndWeather(fileData.city);
      const timeAndDate = cityInfo.location.localtime;
      const timeAndDateArray = timeAndDate.split(' ');
      cityData.name = cityInfo.location.name;
      cityData.date = timeAndDateArray[0];
      cityData.time = timeAndDateArray[1];
      cityData.weather = cityInfo.current.condition.text;
      res.send(cityData);
    } catch (e) {
      console.log(e);
    }
  }
};
