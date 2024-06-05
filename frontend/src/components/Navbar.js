// import link 
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>ArtrSpace</h1>
        </Link>
      </div>
    </header>
  )
}


// export the Navbar component for use
export default Navbar