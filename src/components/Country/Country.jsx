import "./country.css";

const Country = (props) => {
  const { name, population, region, capital, flag } = props;
  return (
    <div className="country">
      <img src={flag} />
      <div>
        <h3>{name || "Default"}</h3>
        <ul>
          <li>Population : {population || "0"}</li>
          <li>Region : {region || "Default"}</li>
          <li>Capital : {capital || "Default"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
