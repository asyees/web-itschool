import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const buttonStyle = {
        backgroundColor: '#c200ffd3',
        color: 'white',
        border: 'none',
        padding: '2px 18px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '100px'
    };

    const handleLogout = () => {
        window.localStorage.removeItem('token');
        window.location.reload()
    };

    return (
        <button style={buttonStyle} onClick={handleLogout}>Выйти</button>
    );
};

export default Logout;
