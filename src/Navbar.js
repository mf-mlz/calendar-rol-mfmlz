import React from 'react';

function Navbar() {

    const backgroundImage = require(`./img/logo.png`);

    return (
        <nav className="navbar navbar-dark bg-dark">
            <img src={backgroundImage} width="40" height="50" className="d-inline-block align-top mx-3 navbar-brand mt-1" alt="Logo" />
        </nav>
    );
}

export default Navbar;
