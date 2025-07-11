let btn1 = document.querySelector("button");
let inputbox = document.querySelector("input");
let temperature = document.querySelector("#temp");
let cityName = document.querySelector("#city-name");
let humidity = document.querySelector("#humidity-box");
let windSpeed = document.querySelector("#wind-speed-box");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const apiKey = `3855797addd281876e26a8a40c6251e6`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const weather_data = await fetch(`${url}`).then((Response) =>
    Response.json()
  );
  console.log(weather_data);

  if (weather_data.cod === "404") {
    temperature.innerText = `error`;
    weatherIcon.src = "images/no-results.png";
    cityName.innerText = `${weather_data.message}`;
    humidity.innerText = `error`;
    windSpeed.innerText = `error`;
  }

  temperature.innerText = `${Math.round(weather_data.main.temp - 273.15)}°c`;
  cityName.innerText = `${city}`;
  humidity.innerText = `${weather_data.main.humidity}%`;
  windSpeed.innerText = `${Math.round(weather_data.wind.speed)} km/h`;
  switch (weather_data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "images/clouds.png";
      break;
    case "Rain":
      weatherIcon.src = "images/rain.png";
      break;
    case "Snow":
      weatherIcon.src = "images/snow.png";
      break;
    case "Clear":
      weatherIcon.src = "images/clear.png";
      break;
    case "Drizzle":
      weatherIcon.src = "images/drizzle.png";
      break;
  }
}
btn1.addEventListener("click", () => {
  checkWeather(inputbox.value);
});
