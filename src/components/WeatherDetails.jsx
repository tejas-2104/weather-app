
import PropTypes from "prop-types";

const WeatherDetails = ({ weatherData, deleteCityData }) => (
    <div className="weather-table-container">
        {weatherData.length > 0 ? (
            <table className="weather-table">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Description</th>
                        <th>Temperature (°C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Data Age (hrs)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {weatherData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.city}</td>
                            <td>{data.description}</td>
                            <td>{data.temp_in_celsius}°C</td>
                            <td>{data.pressure_in_hPa} hPa</td>
                            <td>{data.dataAge}</td>
                            <td>
                                <button onClick={() => deleteCityData(data.city)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ) : (
            <p className="no-data">No Data</p>
        )}
    </div>
);

WeatherDetails.propTypes = {
    weatherData: PropTypes.array.isRequired,
    deleteCityData: PropTypes.func.isRequired,
};

export default WeatherDetails;
