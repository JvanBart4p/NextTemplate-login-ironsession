import Logout from "../Logout";
import Image from "next/image";
import logo from "../../../public/images/Logo_4PROCES_Groot-1.png";
import Burger from "../../../public/images/Burger";
import ArrowLeft from "../../../public/images/ArrowLeft";
const Header = () => {
  return (
    <div className="header">
      <nav className="header">
        <div className="header__wrapper">
          <div className="header__left">
            <Burger />
            <ArrowLeft />
            <Image src={logo} height={60} alt="logo-4proces" priority />
          </div>
          <div className="header__right">
            <Logout />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
