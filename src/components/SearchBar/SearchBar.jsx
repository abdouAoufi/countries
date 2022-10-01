import "./search-bar.css";
import SearchImage from "../../../assets/images/search.png";

const SearchBar = () => {
  return (
    <div id="search-container">
      <img src={SearchImage} id="nav-icon" />
      <input type="text" />
    </div>
  );
};


export default SearchBar;