import React from "react";
import { } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import BarChartIcon from '@mui/icons-material/BarChart';
import Logo from '../../img/logo.jpg';
import Profile from '../../img/profile.jpeg';



const Header = () => {
    return (
        <header>
            <img src={Logo} className='logo' alt="" />
            <div className="inputBox">
                <SearchRoundedIcon className="searchIcon" />
                <input type='text' placeholder="Search" />
            </div>

            <div className="shoppingCart">
                <ShoppingCartRoundedIcon className="cart" />
                <div className="cartContent">
                    <p>2</p>
                </div>
            </div>

            <div className="profileContainer">
                <div className="imgBox">
                    <img src={Profile} className='profile' alt="" />
                </div>
                <h2 className="userName">Mithun Hossain</h2>
            </div>

            <div className="toggleIcon">
                <BarChartIcon className="toggle" />
            </div>
        </header>
    );
};

export default Header;
