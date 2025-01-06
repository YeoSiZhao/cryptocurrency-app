import { useState, useEffect } from "react"
import Axios from "axios"
import Coin from "../Components/coin"
import './HomeScreen.css'
import Search from "../Components/search";

function HomeScreen() {
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

    console.log(filteredCoins);
  
    if (isLoading) {
      return <div>Loading...</div>; 
    }
  
    if (error) {
      return <div>Error: {error.message}</div>; 
    }
  
    return (
      <>
      <h1 className="main-header"> Cryptocurrency</h1>

      <div className="search-container"> 
        <Search search={search} onSearchChange={onSearchChange}/>
      </div>

      <div className="main-cointainer">
        {filteredCoins.map((coin) => (
          <Coin
            key={coin.id}
            id={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume} 
            price={coin.current_price} 
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
          />
        ))}
      </div>
      </>
      
    );
  }
  
  export default HomeScreen;
