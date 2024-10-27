import  { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ searchCity }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSearch = () => {
        searchCity(inputValue);
        setInputValue(""); // Clear the input after search
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search for a city"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

SearchBar.propTypes = {
    searchCity: PropTypes.func.isRequired,
};

export default SearchBar;
