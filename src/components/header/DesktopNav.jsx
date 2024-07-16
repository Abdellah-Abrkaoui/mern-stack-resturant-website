/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function DesktopNav({ menu, logo }) {
  return (
    <div className="h-16 flex items-center justify-between px-6 lg:px-12">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <ul className="flex gap-7">
        {menu?.map((menu, index) => (
          <li key={index}>
            <Link to={menu} className="font-medium capitalize text-secondary">
              {menu}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="flex gap-7 font-medium">
        <li>
          <button className="text-secondary px-4 py-2 rounded">Log In</button>
        </li>
        <li>
          <button className="text-secondary px-4 py-2 rounded">Sign Up</button>
        </li>
      </ul>
    </div>
  );
}

export default DesktopNav;
