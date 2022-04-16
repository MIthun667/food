import React from "react";
import BottomMenu from './BottomMenu';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import SettingsIcon from '@mui/icons-material/Settings';



const Bottom = () => {
    return (
        <div className="bottomMenu">
            <ul id="menu">
                {/* Prettier ignore */}
                <BottomMenu link={"#"} icon={<HomeRoundedIcon />} isHome />
                {/* Prettier ignore */}
                <BottomMenu link={"#"} icon={<ChatIcon />} />
                {/* Prettier ignore */}
                <BottomMenu link={"#"} icon={<AccountBalanceRoundedIcon />} />
                {/* Prettier ignore */}
                <BottomMenu link={"#"} icon={<FavoriteIcon />} />
                {/* Prettier ignore */}
                <BottomMenu link={"#"} icon={<SummarizeRoundedIcon />} />
                {/* Prettier ignore */}
                <BottomMenu link={"#"} icon={<SettingsIcon />} />
                <div className="indicator"></div>
            </ul>
        </div>
    );
};

export default Bottom;
