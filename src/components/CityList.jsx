
import PropTypes from "prop-types";

const CityList = ({ cities, highlightedCity }) => (
    <ul>
        <li className="city">City</li>
        {cities.map((city) => (
            <li
                key={city}
                style={{
                    fontWeight: highlightedCity === city ? "bold" : "normal",
                    color: highlightedCity === city ? "blue" : "black"
                }}
            >
                {city}
            </li>
        ))}
    </ul>
);

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    highlightedCity: PropTypes.string,
};

export default CityList;
