import "./Navbar.css";
import PropTypes from "prop-types";
import logo_light from "../assets/images/logo-light.jpg";
import logo_dark from "../assets/images/logo-dark.png";

import search_icon_light from "../assets/images/search-light.svg";
import search_icon_dark from "../assets/images/search-dark.svg";
import toggle_light from "../assets/images/toggle-light.svg";
import toggle_dark from "../assets/images/toggle-dark.svg";

const Navbar = ({ theme, setTheme }) => {
    const toggle_mode = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <div className={`navbar ${theme}`}>
            <img
                className='logo'
                src={theme === "light" ? logo_light : logo_dark}
                alt={theme === "light" ? "logo_light" : "logo_dark"}
            />
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Features</li>
                <li>About</li>
            </ul>

            <div className='search-box'>
                <input type='text' placeholder='Search...' />
                <img
                    className='search-icon'
                    src={theme === "light" ? search_icon_light : search_icon_dark}
                    alt={theme === "light" ? "Search-icon-light" : "Search-icon-dark"}
                />
            </div>

           <img
                className='toggle-icon'
                src={theme === "light" ? toggle_light : toggle_dark}
                alt={theme === "light" ? "Toggle-light" : "Toggle-dark"}
                onClick={toggle_mode}
            />
        </div>
    );
};

Navbar.propTypes = {
    theme: PropTypes.string.isRequired, // Assuming theme is a string and required
    setTheme: PropTypes.func.isRequired, // Assuming setTheme is a function and required
};

export default Navbar;
