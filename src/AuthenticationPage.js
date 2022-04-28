import CredentialsPannel from './CredentialsPannel';
import EmptyNavbar from './EmptyNavbar';
import Footer from './Footer';


const AuthenticationPage = () => {
    return (  
        <auth className="App">
            <EmptyNavbar></EmptyNavbar>
            <CredentialsPannel></CredentialsPannel>
            <Footer></Footer>
        </auth>
    );
}
 
export default AuthenticationPage;