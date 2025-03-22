// conditional rendering
import React, { useState } from 'react';

interface IState {
    isLogin: boolean;
}

const AuthUser: React.FC = () => {
    const [state, setState] = useState<IState>({
        isLogin: false,
    });
    // login function 
    const handleLogin = (): void => {
        setState({ isLogin: true });
    }

    // logout function 
    const handleLogout = (): void => {
        setState({ isLogin: false });
    }
    return (
        <>
            <h1>{state.isLogin && state.isLogin
                ? (<h1>Welcome User</h1>) // true 
                : (<h1>Please Login For DashBoard</h1>) //false
            } </h1>
            {
                state.isLogin && state.isLogin
                    ? (<button onClick={handleLogout}> LOGOUT </button>)
                    : (<button onClick={handleLogin}> LOGIN </button>)
            }
        </>
    );
};

export default AuthUser;
