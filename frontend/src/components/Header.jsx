import { useContext } from "react";
import NavBar from "./NavBar";
import AuthContext from "../context/AuthContext";

const Header = ({ handleOpen }) => {
  const { user } = useContext(AuthContext);
  return <>{user && <NavBar handleOpen={handleOpen} />}</>;
};

export default Header;
