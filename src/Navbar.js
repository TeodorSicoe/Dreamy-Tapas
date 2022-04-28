import logo from "./logo.png"


const Navbar = () => {
    return (  
        
        <nav className="Navbar">
            <div className="Logo">
                <img src={logo} />
            </div>

            <div className="Navbar-buttons">
                <button className="Bar-button">About</button>
                <button className="Bar-button">Join</button>
            </div>

            

        </nav>
    );
}
 
export default Navbar;