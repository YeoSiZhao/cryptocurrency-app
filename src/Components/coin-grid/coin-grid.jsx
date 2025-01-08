/* eslint-disable react/prop-types */
import './coin-grid.css'

function CoinGrid(props){
    return(
        <div className='coin-container'>
            <img src ={props.image} className='image'></img>
            <h1>{props.name}</h1>
            <h2>{props.symbol.toUpperCase()}</h2>
            <p> Price: ${props.price}</p>

            <p> Volume: ${props.volume.toLocaleString()}</p>

            <p style={{ color: props.priceChange > 0 ? "hsl(128, 49.00%, 50.80%)" : "red" }}> Price Change: ${props.priceChange.toFixed(2)}  </p>

            <p> Market Cap: ${props.marketCap}</p>

        </div>
    )
}

export default CoinGrid