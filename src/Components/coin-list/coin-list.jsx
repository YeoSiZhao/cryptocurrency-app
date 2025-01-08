/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./coin-list.css";

function CoinList(props) {
  return (
    <tr>
      <td>{props.index}</td>
      <td className="align-image">{props.name} <img src ={props.image} className='list-image'></img></td>
      <td>{props.symbol.toUpperCase()}</td>
      <td>${props.price}</td>
      <td>${props.volume.toLocaleString()}</td>
      <td
        style={{
          color: props.priceChange > 0 ? "green" : "red",
        }}
      >
        {props.priceChange.toFixed(2)}%
      </td>
      <td>${props.marketCap.toLocaleString()}</td>
    </tr>
  );
}

export default CoinList;
