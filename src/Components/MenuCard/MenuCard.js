import React from "react";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
const MenuCard = ({name, imgSrc, isActive}) => {
    return (
        <div className={`rowMenuContainer ${isActive ? `active`: ``}`}>
            <div className="imgBox">
                <img src={imgSrc} alt="" />
            </div>
            <h3>{name}</h3>
            <i className="loadMenu">
                <ChevronRightRoundedIcon className="icon"/>
            </i>
        </div>
    );
};

export default MenuCard;
