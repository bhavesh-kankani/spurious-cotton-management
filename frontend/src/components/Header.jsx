import { useContext } from "react";
import NavBar from "./NavBar";
import AuthContext from "../context/AuthContext";

const Header = () => {
    const { user } = useContext(AuthContext);
    return <>{user && <NavBar />}</>;
};

export default Header;
