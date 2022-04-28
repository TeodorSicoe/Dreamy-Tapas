const SignUpForm = () => {
    return (  
        
        <suform class="Auth-pannel">
            <div className="SignUp-card">
                
                <div className="Auth-pair">
                    <label className="Auth-label">Name</label>
                    <input type="text" name="uname" className="Auth-input" required />
                </div>
                
                <div className="Auth-pair">
                    <label className="Auth-label">Surname</label>
                    <input type="text" name="uname" className="Auth-input" required />
                </div>
                    

                <div className="Auth-pair">
                    <label className="Auth-label">Email</label>
                    <input type="text" name="uname" className="Auth-input" required />
                </div>
                
                <div className="Auth-pair">
                    <label className="Auth-label">Password</label>
                    <input type="text" name="passwd" className="Auth-input" required />
                </div>

                <div className="Auth-pair">
                    <label className="Auth-label">Confirm Password</label>
                    <input type="text" name="passwd" className="Auth-input" required />
                </div>

                <button className="Login-button">Create Account</button>
            </div>
            
        </suform>
    );
}
 
export default SignUpForm;