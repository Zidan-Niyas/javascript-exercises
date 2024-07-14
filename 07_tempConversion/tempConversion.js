const convertToCelsius = function(far) {
  const celsius = ((far - 32) * (5/9)).toFixed(1);
  return Math.round(celsius*10)/10;
};

const convertToFahrenheit = function(cel) {
  const fahrenheit = ((cel * (9/5)) + 32).toFixed(1);
  return Math.round(fahrenheit*10)/10; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
