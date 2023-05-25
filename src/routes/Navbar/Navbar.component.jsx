import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
    LogoText,
    NavbarStyled,
    NavigationLink,
    NavigationLinksContainer,
} from "./Navbar.styles";
import { PATHS } from "../../utils/constants";

export const Navbar = () => {
    const navigate = useNavigate();
    const goTo = {
        orders: () => navigate(PATHS.orders),
        kitchen: () => navigate(PATHS.kitchen),
        pickup: () => navigate(PATHS.pickup),
    };

    const location = useLocation();
    const currentRoute = {
        isOrders: location.pathname === PATHS.orders,
        isKitchen: location.pathname === PATHS.kitchen,
        isPickups: location.pathname === PATHS.pickup,
    };

    return (
        <>
            <NavbarStyled>
                <LogoText onClick={goTo.orders}>fastfood</LogoText>
                <NavigationLinksContainer>
                    <NavigationLink
                        isActive={currentRoute.isOrders}
                        onClick={goTo.orders}
                    >
                        Pedidos
                    </NavigationLink>
                    <NavigationLink
                        isActive={currentRoute.isKitchen}
                        onClick={goTo.kitchen}
                    >
                        Cozinha
                    </NavigationLink>
                    <NavigationLink
                        isActive={currentRoute.isPickups}
                        onClick={goTo.pickup}
                    >
                        Retirada
                    </NavigationLink>
                </NavigationLinksContainer>
            </NavbarStyled>
            <Outlet />
        </>
    );
};
