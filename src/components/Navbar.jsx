import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className='checkbtn'>
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo">&lt;/&gt; &nbsp;Kodet</label>
                <ul>
                    <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                    <li><NavLink to="/feedBack" activeClassName="active">Feedback</NavLink></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
