let weather = {
    apiKey: "95731bcc5434c5873f64b7773a55758e", 
    fetchWeather: function (postleitzahl) {
        fetch("https://api.openweathermap.org/data/2.5/weather?zip=" 
        + postleitzahl 
        + ",de&units=metric&lang=de&appid=" 
        + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Wetter in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "ºC";
        document.querySelector(".humidity").innerText = "Feuchtigkeit: " + humidity + "%";
        document.querySelector(".wind").innerText = "Windgeschwindigkeit: " + speed + " Km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?landscape')";
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});
//blablabla
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter"){ 
        weather.search();
    }
});

weather.fetchWeather("61462");