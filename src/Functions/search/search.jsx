/* eslint-disable react/prop-types */
import './search.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Search({ search,onSearchChange }) {

    return(<>
    <div className='search-cointainer'>
    <input 
        placeholder='Search'
        value={search} 
        className="search-bar" 
        onChange={(e) => onSearchChange(e)}>
    </input> 
    <div className='search-icon'>
        <SearchRoundedIcon/>
    </div>

    </div>
    </>)

}

export default Search