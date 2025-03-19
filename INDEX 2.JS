const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key

document.getElementById('search-btn').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert("City not found!");
            }
        })
        .catch(err => {
            console.error(err);
            alert("Error fetching weather data.");
        });
}

function displayWeather(data) {
    document.getElementById('city-name').innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById('temp').innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById('weather-description').innerText = `Weather: ${data.weather[0].description}`;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;
}
