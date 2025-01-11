import { Link } from 'react-router-dom';
import "./headers.css"

function Headers() {
  return (
    <div className='header'>
      <div className='title'>
        CryptoTracker
      </div>
      <div className='tabs'>
      <Link to="/">
      <p className='link'>Homepage</p>
      </Link>

      <Link to="/dashboard">
      <p className='link'>Dashboard</p>
      </Link>
      </div>

    </div>
  )
}

export default Headers
