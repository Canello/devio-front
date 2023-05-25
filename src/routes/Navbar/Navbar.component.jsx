import { Outlet } from "react-router-dom";
import { NavbarStyled } from "./Navbar.styles";

export const Navbar = () => {
    return (
        <>
            <NavbarStyled></NavbarStyled>
            <Outlet />
        </>
    );
};
