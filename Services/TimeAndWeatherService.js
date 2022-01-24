const fetch = (...args) =>import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = class TimeAndWeatherService {
  static async getTimeAndWeather(city) {
    const url = `http://api.weatherapi.com/v1/current.json?key=493f7722705c44bb906133558222101&q=${city}`;

    const response = await fetch(url);
    const jsonCityData = await response.json();
    return jsonCityData;
  }
};
