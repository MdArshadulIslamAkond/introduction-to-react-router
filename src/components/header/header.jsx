import {  NavLink} from "react-router-dom";
import './header.css'
const Header = () => {
 

    const navLinkStyle = ({ isActive, isPending }) => {
        return {
        fontWeight: isActive ? "bold" : "",
        color: isPending ? "red" : isActive ?"red" : "black"
        };
        }
    return (
        <div>
            <nav>
                <span>My Weabsite</span>
            <NavLink to='/'style={navLinkStyle} >Home</NavLink>
            <NavLink to='/about'style={navLinkStyle} >About</NavLink>
            <NavLink to='/posts'style={navLinkStyle} >Posts</NavLink>
            <NavLink to='/contact'style={navLinkStyle} >Contact us</NavLink>
            <NavLink to='/users' style={navLinkStyle}>Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;

{/* <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/posts' >Posts</Link>
            <Link to='/contact' >Contact us</Link>
            <Link to='/users' >Users</Link> */}