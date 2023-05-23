import Link from "next/link";

const Side = () => {
  return (
    <div className="side-wrapper tablet-up">
      <Link href="/dashboard" className="side-wrapper__link">
        <div className="side-wrapper__item">Dashboard</div>
      </Link>
      <Link href="/user" className="side-wrapper__link">
        <div className="side-wrapper__item">User</div>
      </Link>
      <Link href="/relations" className="side-wrapper__link">
        <div className="side-wrapper__item">Relations</div>
      </Link>
      <Link href="/forms" className="side-wrapper__link">
        <div className="side-wrapper__item last">Forms</div>
      </Link>
    </div>
  );
};

export default Side;
