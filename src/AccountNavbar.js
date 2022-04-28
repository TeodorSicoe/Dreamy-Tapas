import logo from "./logo.png"


const AccountNavbar = () => {
    return (  
        
        <accountnav className="Navbar">
            <div className="Logo">
                <img src={logo} />
            </div>

            <div className="Navbar-buttons">
                <button className="Bar-button">Cart</button>
                <button className="Bar-button">Sign out</button>
            </div>
        </accountnav>
    );
}
 
export default AccountNavbar;