import { useState, useEffect } from "react"
import Axios from "axios" // npm install axios
import './dashboard.css';
import Search from "../../Functions/search/search";
import BackToTop from "../../Functions/top/top";
import CoinPage from "./coin-page";
import Headers from "../../Components/headers/headers";
// npm install @mui/material @emotion/react @emotion/styled 
// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react for Icons
// npm i react-router-dom for routing 
// npm i @mui/lab for Tabs


function DashBoard() {
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add a loading state
    const [error, setError] = useState(null); // Add an error state

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await Axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
          );
          setCoins(response.data); 
          setIsLoading(false); 
        } catch (err) {
          setError(err);
          setIsLoading(false);
        }
      };
      fetchData();
    }, []);

    const [search,setSearch] = useState("");
    const onSearchChange = (e) => {
      setSearch(e.target.value);
    }

    var filteredCoins = coins.filter((items) => 
      items.name.toLowerCase().includes(search.toLowerCase()) ||
      items.symbol.toLowerCase().includes(search.toLowerCase())
    );
  
    if (isLoading) {
      return <div>Loading...</div>; 
    }
  
    if (error) {
      return <div>Error: {error.message}</div>; 
    }
    return (
      <>
      <Headers/>
      <h1 className="main-header"> Dashboard</h1>

      <div className="search-container"> 
        <Search search={search} onSearchChange={onSearchChange}/>
      </div>
      <div>
          <CoinPage 
            filteredCoins={filteredCoins}/>
      </div>
      <BackToTop/>
      </>
      
    );
  }
  
  export default DashBoard
