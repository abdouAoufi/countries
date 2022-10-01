import { useState } from "react";
import "./select-region.css";

const regions = ["Africa", "America", "Europe", "Asia", "Oceania"];

const SelectRegion = () => {
  const [hidden, setHidden] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("Select Region");
  return (
    <div>
      <div>
        <p
          id="select"
          onClick={() => {
            setHidden(!hidden);
          }}
        >
          {selectedCountry}
        </p>
      </div>
      {!hidden && (
        <div id="region-cont">
          {regions.map((c) => {
            return (
              <ul>
                <li
                  onClick={() => {
                    setSelectedCountry(c);
                    setHidden(true);
                  }}
                >
                  {c}
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectRegion;
