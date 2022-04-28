import Footer from './Footer';
import AccountNavbar from './AccountNavbar';
import OfferPannel from './OfferPannel';


const HomePage = () => {
    return (  
        <home className="App">
            <AccountNavbar></AccountNavbar>
            <OfferPannel></OfferPannel>
            <Footer></Footer>
        </home>
    );
}
 
export default HomePage;