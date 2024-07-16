import { useState } from "react";
import DesktopNav from "./DesktopNav";
import logo from "/logo.svg";
import MobileNav from "./MobileNav";

function Header() {
  const [hideLeft, setHideLeft] = useState("-left-[1000px]");
  const menu = ["recipe", "resources", "about", "contact"];
  const onOpen = () => {
    setHideLeft("left-0");
  };
  const onClose = () => {
    setHideLeft("-left-[1000px]");
  };
  return (
    <>
      <div className="max-[900px]:hidden">
        <DesktopNav menu={menu} logo={logo} />
      </div>
      <div className="min-[900px]:hidden">
        <MobileNav
          menu={menu}
          logo={logo}
          onOpen={onOpen}
          hideLeft={hideLeft}
          onClose={onClose}
        />
      </div>
    </>
  );
}

export default Header;
