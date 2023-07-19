import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
    // TODO!!
    // useDarkModeContext for Dark Mode and useContext for Current User

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span>Sociopedia</span>
                </Link>
                <HomeOutlinedIcon />
                <WbSunnyOutlinedIcon />
                <GridViewOutlinedIcon />
            </div>
            <div className="search">
                <SearchOutlinedIcon />
                <input type="text" placeholder="Search..." />
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user">
                    <img src="" alt="" />
                    <span>Muhammad Awais</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;