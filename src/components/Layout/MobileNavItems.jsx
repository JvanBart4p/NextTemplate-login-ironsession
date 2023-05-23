import Link from "next/link"


const MobileNavMenu = () => {
    return (
      <div className="mobileMenu__wrapper">
        <Link href="/dashboard">private</Link>
        <Link href="/relations">dashboard</Link>
      </div>
    );
}

export default MobileNavMenu