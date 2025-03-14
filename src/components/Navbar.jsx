import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className='checkbtn'>
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo">Kodet</label>
                <ul>
                    <li><Link className='active'>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Services</Link></li>
                    <li><Link>Contact</Link></li>
                    <li><Link>Feedback</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;