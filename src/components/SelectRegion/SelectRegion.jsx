import { useState } from "react";
import "./select-region.css";

const regions = ["Africa", "America", "Europe", "Asia", "Oceania"];

const SelectRegion = (props) => {
  const [hidden, setHidden] = useState(true);
  const { selectedCountry, setSelectedCountry } = props;

  return (
    <div>
      <div>
        <p
          id="select"
          onClick={() => {
            setHidden(!hidden);
          }}
        >
          {selectedCountry || "Select region"}
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
