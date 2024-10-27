import  { useState } from "react";
import CityList from "./components/CityList";
import WeatherDetails from "./components/WeatherDetails";
import SearchBar from "./components/SearchBar";
import { fetchWeatherData } from "./services/weatherService"; // Import fetchWeatherData function
import "./styles/App.css";

const App = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [highlightedCity, setHighlightedCity] = useState(null);

    const cities = ["London", "New York", "Los Angeles", "Las Vegas"];

    const getWeatherForAllCities = async () => {
        let newWeatherData = [];
        for (const city of cities) {
            const data = await fetchWeatherData(city);
            const currentDate = new Date();
            const dataDate = new Date(data.date_and_time);
            const dataAge = Math.floor((currentDate - dataDate) / 3600000); // in hours

            newWeatherData.push({
                city,
                description: data.description,
                temp_in_celsius: data.temp_in_celsius,
                pressure_in_hPa: data.pressure_in_hPa,
                dataAge
            });
        }
        setWeatherData(newWeatherData);
    };

    const searchCity = (searchCity) => {
        const index = weatherData.findIndex((data) => data.city.toLowerCase() === searchCity.toLowerCase());
        if (index >= 0) {
            setHighlightedCity(searchCity);
            setTimeout(() => setHighlightedCity(null), 3000); // remove highlight after 3 seconds
        } else {
            alert("City not found");
        }
    };

    const deleteCityData = (cityToDelete) => {
        setWeatherData(weatherData.filter((data) => data.city !== cityToDelete));
    };

    return (
        <div className="app">
            <header className="app-header">Tejas Weather App</header>
            <div className="main-container">
                <div className="left-column">
                    <button className="get-weather-btn" onClick={getWeatherForAllCities}>Get Weather</button>
                    <div><CityList cities={cities} highlightedCity={highlightedCity} /></div>
                </div>
                <div className="right-column">
                    <div className="app-content">
                        <SearchBar searchCity={searchCity} />
                        <div className="weather-section">
                            
                            <WeatherDetails weatherData={weatherData} setWeatherData={setWeatherData} deleteCityData={deleteCityData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
