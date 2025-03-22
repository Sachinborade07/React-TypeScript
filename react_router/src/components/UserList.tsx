import React, { useState, useEffect } from "react";
import { IUsers } from "../type/api";
import UserServices from "../services/UserServices";
import { Link } from "react-router-dom";

interface IState {
    loading: boolean;
    users: IUsers[];
    errorMsg: string;
}

const UserList: React.FC = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        users: [] as IUsers[],
        errorMsg: ''
    });

    //network effect 
    useEffect(() => {
        setState({ ...state, loading: true })
        UserServices.getAllUsers()
            .then((res) => setState({
                ...state, loading: false, users: res.data
            }))
            .catch(err => setState({
                ...state, loading: false, errorMsg: err.message
            }))
    }, []);

    const { loading, users, errorMsg } = state

    return (
        <>
            <h1>Data from API's</h1>
            {errorMsg && (<p>{errorMsg} </p>)}
            {loading && <h1>Loading.....</h1>}
            <table>
                <thead>
                    <tr>
                        <td> ID </td>
                        <td> NAME</td>
                        <td> UserName </td>
                        <td> Email </td>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 &&
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>
                                    <Link to={`/UserList/${user.id}`}>
                                        {user.name}
                                    </Link>
                                </td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default UserList;