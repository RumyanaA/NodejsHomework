module.exports = class CreateOutputService {
  static createOutputCityObject(city) {
    let cityData = {};
    const timeAndDate = city.location.localtime;
    const timeAndDateArray = timeAndDate.split(' ');
    cityData.name = city.location.name;
    cityData.date = timeAndDateArray[0];
    cityData.time = timeAndDateArray[1];
    cityData.weather = city.current.condition.text;
    console.log(JSON.stringify(cityData));
    return JSON.stringify(cityData);
  }
  static handleWrongCity(response){
      let errorMessage={};
      errorMessage.error=response.error.message;
      console.log(JSON.stringify(errorMessage));
      return JSON.stringify(errorMessage);
  }
};
