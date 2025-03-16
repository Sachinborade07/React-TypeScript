import React, { useState } from "react";
import { loginUser } from "../type/type";

interface FormData {
    user: loginUser;
}

const Login: React.FC = () => {
    const [state, setState] = useState<FormData>({
        user: {
            email: "",
            password: ""
        }
    });

    // handle change function 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setState((prev) => ({
            user: {
                ...prev.user,
                [name]: value,
            }
        }));
    };

    // form handling
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        alert("LOGIN SUCCESSFULLY");
    }

    return (
        <>
            <h1> THIS IS LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Email Address </label>
                    <input
                        name="email"
                        type="email"
                        className="form-label"
                        value={state.user.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label> Password </label>
                    <input
                        name="password"
                        type="password"
                        className="form-label"
                        value={state.user.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit"> SUBMIT </button>
                </div>
            </form>
            <div>
                <h3> {JSON.stringify(state.user)}</h3>
            </div>
        </>
    );
};

export default Login;