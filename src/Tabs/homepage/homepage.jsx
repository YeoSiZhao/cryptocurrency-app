import Headers from '../../Components/headers/headers';
import "./homepage.css";

function HomePage() {
  return (
    <>
        <Headers/>
        <div className='header-text'>
            Welcome 
        </div>

        <div className='body-text'>
            Cryptocurrency is a digital currency in which transactions are verified and records maintained by a decentralized system using cryptography, rather than by a centralized authority.
        </div>
    </>
  )
}

export default HomePage;