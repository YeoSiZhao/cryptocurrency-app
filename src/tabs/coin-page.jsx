/* eslint-disable react/prop-types */
import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CoinGrid from "../Components/coin-grid/coin-grid";
import CoinList from "../Components/coin-list/coin-list";
import './coin-page.css';

export default function CenteredTabs({ filteredCoins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "white",
    '&:hover': {
      color: 'black',
      backgroundColor: 'grey',
    },
    fontFamily: "Inter,sans-serif",
    fontWeight: 500,
    fontSize: 20,
    textTransform: "capitalize",
  };

  return (
    <TabContext value={value}>
      <div style={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>
      </div>
      <TabPanel value="grid">
        <div className="main-coin-grid-container">
          {filteredCoins.length > 0 ? (
            filteredCoins.map((coin) => (
              <CoinGrid
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
            ))
          ) : (
            <div>
              <h1 style={{ textAlign: "center" }}>
                Sorry, could not find the coin you are looking for 😞
              </h1>
            </div>
          )}
        </div>
      </TabPanel>
      <TabPanel value="list">
      <div className="main-coin-list-container">
        <table className="coin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Volume</th>
              <th>Price Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.length > 0 ? (
              filteredCoins.map((coin,idx) => (
                <CoinList
                  key={coin.id}
                  index={idx+1}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  volume={coin.total_volume}
                  priceChange={coin.price_change_percentage_24h}
                  marketCap={coin.market_cap}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  Sorry, could not find the coin you are looking for 😞
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </TabPanel>

    </TabContext>
  );
}
