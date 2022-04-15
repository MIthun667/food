import React from "react";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
const MenuContainer = ({name }) => {
    return (
        <div className="menuContainer">
            <h3>{name}</h3>
            <div className="viewAll">
                <p>View All</p>
                <i><ChevronRightRoundedIcon /></i>
            </div>
      </div>
  );
};

export default MenuContainer;
