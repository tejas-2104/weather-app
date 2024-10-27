export const fetchWeatherData = async (city) => {
    const response = await fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city}`);
    return response.json();
};
