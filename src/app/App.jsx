import { useEffect, useState } from "react";
import Country from "../components/Country/Country";
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import SelectRegion from "../components/SelectRegion/SelectRegion";
import "./app.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const getCountries = () => {
    fetch("https://restcountries.com/v3.1/all", {
      method: "GET",
    }).then((response) => {
      response.json().then((data) => {
        setCountries(data);
      });
    });
  };

  const getCountriesByRegion = () => {
    if (!selectedRegion) return;
    setCountries([]);
    fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`, {
      method: "GET",
    }).then((response) => {
      response.json().then((data) => {
        setCountries(data);
      });
    });
  };

  useEffect(() => {
    if (!selectedRegion) {
      getCountries();
    }
  }, []);

  useEffect(() => {
    // ! skip the first render
    if (selectedRegion) {
      getCountriesByRegion();
    }
  }, [selectedRegion]);

  return (
    <div>
      <Navbar />
      <div id="search-select">
        <SearchBar />
        <SelectRegion
          selectedCountry={selectedRegion}
          setSelectedCountry={setSelectedRegion}
        />
      </div>
      <div className="country-container">
        {countries.length === 0 ? (
          <div> LOADING .....</div>
        ) : (
          countries.map((c) => (
            <Country
              name={c.name.official}
              population={c.population}
              flag={c.flags.png}
              region={c.continents}
              capital={c.capital}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
