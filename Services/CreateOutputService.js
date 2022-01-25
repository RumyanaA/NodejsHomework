const email = require('./EmailSenderService');
const logger = require('./LoggingService');

module.exports = class CreateOutputService {
  static async createOutputCityObject(city, mail) {
    const cityData = {};
    const timeAndDate = city.location.localtime;
    const timeAndDateArray = timeAndDate.split(' ');
    cityData.name = city.location.name;
    [cityData.date, cityData.time] = [timeAndDateArray[0], timeAndDateArray[1]];
    cityData.weather = city.current.condition.text;
    if (mail) {
      await email.sendMail(mail, JSON.stringify(cityData));
      logger.info('Email sent');
    }
    logger.silly(JSON.stringify(cityData));
    return JSON.stringify(cityData);
  }

  static handleWrongCity(response) {
    const errorMessage = {};
    errorMessage.error = response.error.message;
    logger.silly(JSON.stringify(errorMessage));
    return JSON.stringify(errorMessage);
  }
};
