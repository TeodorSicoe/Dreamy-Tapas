const CredentialsPannel = () => {
    return (  
        
        <cred class="Auth-pannel">
            <div className="Auth-card">
                <div className="Auth-pair">
                    <label className="Auth-label">Username</label>
                    <input type="text" name="uname" className="Auth-input" required />
                </div>
                
                <div className="Auth-pair">
                    <label className="Auth-label">Password</label>
                    <input type="text" name="passwd" className="Auth-input" required />
                </div>

                <button className="Login-button">Log in</button>

                <div>
                    <p>No account? <a href="https://www.w3schools.com/">Sign up for Dreamy Tapas</a></p>
                </div>
            </div>
            
        </cred>
    );
}
 
export default CredentialsPannel;