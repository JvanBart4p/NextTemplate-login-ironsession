import Link from "next/link";

const MobileNavMenu = () => {
  return (
    <div className="mobileMenu__wrapper">
      <Link href="/dashboard" className="">
        <div className="">Dashboard</div>
      </Link>
      <Link href="/user" className="">
        <div className="">User</div>
      </Link>
      <Link href="/relations" className="">
        <div className="">Relations</div>
      </Link>
      <Link href="/forms" className="">
        <div className="">Forms</div>
      </Link>
    </div>
  );
};

export default MobileNavMenu;
