import React from "react";
import Banner from './../Banner/Banner';
import BannerImg from '../../img/bannerImg.jpg';
import MenuContainer from "../MenuContainer/MenuContainer";
import MenuCard from "../MenuCard/MenuCard";
import { MenuItems, Items } from '../Data/Data';
import ItemCard from "../ItemCard/ItemCard";
import { useState, useEffect } from "react";

const Main = () => {

    const [isMainData, setMainData] = useState(
        Items.filter(element => element.itemId === "buger01")
    )
      
    useEffect(() => {
        const menuli = document.querySelectorAll('#menu li');
        function setMenuActive() {
            menuli.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
        }
        menuli.forEach((n) => n.addEventListener('click', setMenuActive))
        // MenuCard Active toggle
        const cards = document
            .querySelector(".rowContainer")
            .querySelectorAll(".rowMenuContainer");

        function setMenuCardActive() {
            cards.forEach((n) => n.classList.remove("active"));
            this.classList.add("active")
        }
        cards.forEach((n) => n.addEventListener('click', setMenuCardActive))


    }, [isMainData]);

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
                                    <MenuCard
                                        imgSrc={data.imgSrc}
                                        name={data.name}
                                        isActive={data.id === 1 ? true : false}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="dishItemContainer">
                        {
                            isMainData && isMainData.map(data => (
                                <ItemCard key={data.id}
                                    imgSrc={data.imgSrc}
                                    name={data.name}
                                    rating={data.ratings}
                                    price={data.price}
                                 />
                            ))
                        }


                    </div>
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
