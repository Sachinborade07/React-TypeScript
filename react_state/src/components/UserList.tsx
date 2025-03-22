import React, { useState } from 'react';
import { Iuser } from '../type/Iuser';

interface IState {
    users: Iuser[]
}

const UserList: React.FC = () => {

    const [state, setState] = useState<IState>({
        users: [
            { SNO: 1, NAME: "SACHIN", AGE: 25 },
            { SNO: 2, NAME: "RAM", AGE: 26 },
            { SNO: 3, NAME: "SHAYAM", AGE: 27 }
        ]
    })

    return (
        <>
            <h1>Lopping / Iteration</h1>
            <div>UserList</div>
            <table>
                <thead>
                    <tr>
                        <th scope='col'> SNO </th>
                        <th scope='col'> NAME </th>
                        <th scope='col'> AGE </th>
                    </tr>
                </thead>
                <tbody>
                    {/* first check length of the data or else it will crash at depolyment */}
                    {state.users.length > 0 && state.users.map(user => (
                        <tr key={user.SNO}>
                            <td> {user.SNO} </td>
                            <td> {user.NAME} </td>
                            <td> {user.AGE} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
};

export default UserList;