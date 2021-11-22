import React from 'react'

const Login = ({ email, setEmail, password, setPassword, handleSignIn, handleSignUp, hasAccount, setHasAccount, passwordError, emailError,  }) => {
    return (
        <div className="login">
            <div className="loginContainer">
                <label>Email</label>
                <input 
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                <p className="errorMsg">{emailError}</p>
                
                <label>Password</label>
                <input 
                    type="password"
                    required 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                <p className="errorMsg">{passwordError}</p>

                <div className="btnContainer">
                    { hasAccount ? (
                        <>
                            <button onClick={handleSignIn}>Sign in</button>
                            <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignUp}>Sign up</button>
                            <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )

                    }
                    
                </div>
            </div>
            
        </div>
    )
}

export default Login
