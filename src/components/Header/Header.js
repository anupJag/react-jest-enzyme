import React from 'react';
import Logo from '../../assets/images/logo.png';
import './Header.scss';

const Header = (props) => {
    return (
        <header>
            <div className={"container"}>
                <img src={Logo} alt="logo" className={"img"} />
            </div>
        </header>
    );
};

export default Header;