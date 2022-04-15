import React from "react";

const BottomMenu = ({ link, icon, isHome }) => {
    return (
        <li className={isHome ? 'active' : ""}>
            <a href={link}>
                <span className="icons">{ icon }</span>
            </a>
        </li>
  );
};

export default BottomMenu;
