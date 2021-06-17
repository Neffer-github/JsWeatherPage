let weather = {
  apiKey: "d3f40efd97f5bac0884a6385758fa1d8",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    console.log(temp,description);

    console.log(data.weather[0].description);
    PrintBg(data.weather[0].description);
    
   /*
   */
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Chisinau");

//Test Swap BG but it's work Good :)
var arrayBg = [" url('./assets/./image/Light\ rain.jpg')",
" url('./assets/./image/Broken\ clouds.jpg')",
" url('./assets/./image/Moderate\ rain.jpg')",
" url('./assets/./image/Overcast\ clouds.jpg')",
" url('./assets/./image/Heavy\ intensity\ rain.jpg')",
" url('./assets/./image/Scattered\ clouds.jpg')",
" url('./assets/./image/Few\ clouds.jpg')",
" url('./assets/./image/Clear\ sky.jpg')",
];

var posession = [
  "light rain",
  "broken clouds",
  "moderate rain",
  "overcast clouds",
  "heavy intensity rain",
  "scattered clouds",
  "few clouds",
  "clear sky"
];
function PrintBg(temp)
{

  for(let i=0 ; i<arrayBg.length; i++)
  {

  if(temp == posession[i])
  {
    document.body.style.backgroundImage = arrayBg[i];
  }

console.log(temp)
}
console.log("problem")
}
