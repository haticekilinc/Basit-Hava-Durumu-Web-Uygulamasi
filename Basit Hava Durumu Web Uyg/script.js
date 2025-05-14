const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const locationDiv = document.getElementById('location');
const temperatureDiv = document.getElementById('temperature');
const descriptionDiv = document.getElementById('description');
const iconDiv = document.getElementById('icon');
const feelsLikeDiv = document.getElementById('feels-like');
const windDiv = document.getElementById('wind');
const humidityDiv = document.getElementById('humidity');
const forecastDiv = document.getElementById('forecast');

const apiKey = 'https://api.openweathermap.org/data/3.0/onecall?lat=%7Blat%7D&lon=%7Blon%7D&appid=%7BAPI/'; //Örnek olarak(sizin aldığınız API adersini '' arasına girmelisiniz.
async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (response.ok) {
            updateWeatherInfo(data);
        } else {
            displayError(data.message);
        }
    } catch (error) {
        displayError('Hava durumu bilgileri alınamadı.');
    }
}

async function getForecastData(city) {
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=tr`;

    try {
        const response = await fetch(forecastApiUrl);
        const data = await response.json();
        if (response.ok && data.list) {
            updateForecastInfo(data.list);
        } else {
            console.error('Gelecek hava durumu bilgileri alınamadı:', data ? data.message : 'Bilinmeyen hata');
        }
    } catch (error) {
        console.error('Gelecek hava durumu bilgileri alınamadı:', error);
    }
}

function updateWeatherInfo(data) {
    locationDiv.textContent = `${data.name}, ${data.sys.country}`;
    temperatureDiv.textContent = `${Math.round(data.main.temp)}°C`;
    descriptionDiv.textContent = data.weather[0].description;
    iconDiv.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Hava Durumu İkonu">`;
    feelsLikeDiv.textContent = `${Math.round(data.main.feels_like)}°C`;
    windDiv.textContent = `${data.wind.speed} m/s`;
    humidityDiv.textContent = `${data.main.humidity}%`;
}

function updateForecastInfo(forecastList) {
    forecastDiv.innerHTML = '<h2>Gelecek Hava Durumu</h2>';
    const dailyForecast = {};

    forecastList.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString('tr-TR', { weekday: 'short' });

        if (!dailyForecast[day]) {
            dailyForecast[day] = {
                temp_max: -Infinity,
                temp_min: Infinity,
                icon: null
            };
        }

        dailyForecast[day].temp_max = Math.max(dailyForecast[day].temp_max, item.main.temp_max);
        dailyForecast[day].temp_min = Math.min(dailyForecast[day].temp_min, item.main.temp_min);

        // İlk ikonu al (öğlen saatlerine yakın olanı tercih edilebilir)
        if (!dailyForecast[day].icon) {
            dailyForecast[day].icon = item.weather[0].icon;
        }
    });

    for (const day in dailyForecast) {
        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
            <h3>${day}</h3>
            <img src="https://openweathermap.org/img/wn/${dailyForecast[day].icon}@2x.png" alt="Hava Durumu İkonu">
            <p>Max: ${Math.round(dailyForecast[day].temp_max)}°C</p>
            <p>Min: ${Math.round(dailyForecast[day].temp_min)}°C</p>
        `;
        forecastDiv.appendChild(forecastItem);
    }
}

function displayError(message) {
    locationDiv.textContent = '';
    temperatureDiv.textContent = '';
    descriptionDiv.textContent = message;
    iconDiv.innerHTML = '';
    feelsLikeDiv.textContent = '';
    windDiv.textContent = '';
    humidityDiv.textContent = '';
    forecastDiv.innerHTML = '';
}

searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeatherData(city);
        getForecastData(city);
    } else {
        displayError('Lütfen bir şehir girin.');
    }
});

// Sayfa yüklendiğinde Ankara'nın hava durumunu göster (isteğe bağlı)
window.onload = () => {
    getWeatherData('Ankara');
    getForecastData('Ankara');
};