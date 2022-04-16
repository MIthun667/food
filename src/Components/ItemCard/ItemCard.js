import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useState } from "react";



const ItemCard = ({ imgSrc, name, rating, price }) => {
    

    const [favourite, setFavourite] = useState(false);
    const [currentValue, setCurrentValue] = useState(Math.floor(rating))
    const handleClick = (value) => {
        setCurrentValue(value)
    }
    
    return (
        <div className="itemCard">
            <div className={`isFav ${favourite ? "active" : ""}`}
            onClick={() => setFavourite(!favourite)}>
                <FavoriteIcon />
            </div>
            <div className="imgBox">
                <img src={imgSrc} alt="" className="itemImg"/>
            </div>
            <div className="itemContent">
                <h3>{name}</h3>
                <div className="bottom">
                    <div className="ratings">
                        {Array.apply(null, { length: 5 }).map((e, i) => (
                            <i key={i} className={`rating ${currentValue > i ? "orange" : "gray"}`}
                            onClick={()=> handleClick(i+1)}>
                                <StarRoundedIcon />
                            </i>
                        ))}
                        <h3 className="price"><span>$</span>{ price }</h3>
                    </div>
                    <i className="addToCart">
                        <AddRoundedIcon />
                    </i>
                </div>
            </div>
      </div>
  );
};

export default ItemCard;
