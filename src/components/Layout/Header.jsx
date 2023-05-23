import { useState } from "react";
import Logout from "../Logout";
import Image from "next/image";
import logo from "../../../public/images/Logo_4PROCES_Groot-1.png";
import Burger from "../../../public/images/Burger";
import MobileNavMenu from "./MobileNavItems";

const Header = ({loggedIn}) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="header">
      <nav className="header">
        <div className="header__wrapper">
          <div className="header__left">
            {loggedIn && (
              <div
                onClick={() => setMobileMenu((mobileMenu) => !mobileMenu)}
                className="header__left mobile-only"
              >
                <Burger />
              </div>
            )}
            <Image src={logo} height={60} alt="logo-4proces" priority />
          </div>
          <div className="header__right">
            <Logout />
          </div>
        </div>
      </nav>
      {mobileMenu && (
        <div className="mobileMenu mobile-only">
          <MobileNavMenu />
        </div>
      )}
    </div>
  );
};

export default Header;
