const convertToCelsius = function(fahrValue) {
  celsius = (fahrValue - 32) / 1.8;
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsValue) {
  fahrenheit = (celsValue * 1.8) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
