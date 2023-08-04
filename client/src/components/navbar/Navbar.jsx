import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "context/authContext";
import fakeProfilePic from "../../assets/unknownProfilePic.jpg";
import { makeRequest } from "../../axios";

const Navbar = () => {
    const { toggle, darkMode } = useContext(DarkModeContext);
    const navigate = useNavigate();
    const [ logout, setLogout ] = useState(false);
    const { currentUser } = useContext(AuthContext);

    const handleLogout = () => {
        makeRequest.post("/auth/logout");
        localStorage.clear();
        navigate(0);
    };

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span>Sociopedia</span>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span><HomeOutlinedIcon className="homeIcon"/></span>
                </Link>
                {darkMode ? (
                    <WbSunnyOutlinedIcon onClick={toggle} style={{cursor: "pointer"}} />
                    ) : (   
                    <DarkModeOutlinedIcon onClick={toggle} style={{cursor: "pointer"}} />
                )}
                <GridViewOutlinedIcon style={{cursor: "pointer"}} />
            </div>
            <div className="search">
                <SearchOutlinedIcon style={{cursor: "pointer"}} />
                <input type="text" placeholder="Search..." />
            </div>
            <div className="right">
                <PersonOutlinedIcon style={{cursor: "pointer"}} />
                <EmailOutlinedIcon style={{cursor: "pointer"}} />
                <NotificationsOutlinedIcon style={{cursor: "pointer"}} />
                <div className="user" onClick={() => setLogout(!logout)}>
                    <img src={currentUser.profilePic ? "/upload/" + currentUser.profilePic : fakeProfilePic} alt="" />
                    <span>{currentUser.name}</span>
                    {logout && (
                        <button onClick={handleLogout}>Logout</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;