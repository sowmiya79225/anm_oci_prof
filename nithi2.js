const apiKey = 'YOUR_API_KEY'; // Replace with your API key from OpenWeatherMap

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
                return;
            }

            // Extract data from the API response
            const cityName = data.name;
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            // Display the weather information
            document.getElementById('city-name').textContent = `City: ${cityName}`;
            document.getElementById('temperature').textContent = `Temperature: ${temp}°C`;
            document.getElementById('description').textContent = `Weather: ${description}`;
            document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeed} m/s`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
