
import EmptyNavbar from './EmptyNavbar';
import Footer from './Footer';
import SignUpForm from './SignUpForm';


const SignUpPage = () => {
    return (  
        <signup className="App">
            <EmptyNavbar></EmptyNavbar>
            <SignUpForm></SignUpForm>
            <Footer></Footer>
        </signup>
    );
}
 
export default SignUpPage;