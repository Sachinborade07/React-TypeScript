import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to={'/'}> Navbar </Link>
                </div>
            </nav >
            <button onClick={() => navigate('/UserList')}> USER_LIST </button>

        </>
    )
}

export default Navbar;