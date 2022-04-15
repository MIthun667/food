import React from "react";


const Banner = ({name, discount, link}) => {
    return (
        <div className="bannerContent">
            <h3>Hello {name}</h3>
            <p>
                Get free discount <br /> for every <span>${discount} </span> purchase
            </p>
            <a href={link}>Learn More</a>
      </div>
  );
};

export default Banner;
