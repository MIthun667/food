import React from "react";
import Banner from './../Banner/Banner';
import BannerImg from '../../img/bannerImg.jpg';
import MenuContainer from "../MenuContainer/MenuContainer";
import MenuCard from "../MenuCard/MenuCard";
import Burger from "../../img/burger.jpg"
import { MenuItems, Items } from '../Data/Data';

const Main = () => {
    return (
        <main>
            <div className="mainContainer">
                {/*Banner*/}
                <div className="banner">
                    <Banner name={"Mithun!"} discount={"20"} link={"#"} />
                    <img src={BannerImg} className="delivaryPic" alt="" />
                </div>
                {/*DishContainer*/}
                <div className="dishContainer">
                    <div className="menuCard">
                        <MenuContainer name={"Menu Catagory"} />
                    </div>
                    <div className="rowContainer">
                        {
                            MenuItems && MenuItems.map(data => (
                                <div key={data.id}>
                                    <MenuCard imgSrc={Burger} name={"Burger"} isActive />
                                </div>
                            ))
                        }
                    </div>
                    <div className="dishItemContainer"></div>
                </div>
                {/**/}
                {/**/}
                {/**/}
            </div>
            <div className="rightMenu"></div>
        </main>
    );
};

export default Main;
