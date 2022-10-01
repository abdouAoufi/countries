import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import SelectRegion from "../components/SelectRegion/SelectRegion";
import "./app.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="search-select">
        <SearchBar />
        <SelectRegion />
      </div>
    </div>
  );
};

export default App;
