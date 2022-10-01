

export const useGetCountries = () => {
 const [countries, setCountries] = useState(null);
 fetch("https://restcountries.com/v3.1/all", {
  method: "GET"
 }).then(response => {
  response.json().then(data => {
   setCountries(data)
  })
 })
 return countries;
}