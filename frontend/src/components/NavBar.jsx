import Image from "next/image";
import React from "react";

const NavAndHeader = () => {
  // Nav items
  return (
    <nav id="navBar">
      <h1>Furniture</h1>
      <div id="navigation">
        <p class="highlight">New In</p>
        <p>Furniture</p>
        <p>Rest</p>
        <p>Decoration</p>
        <p>Outdoor</p>
        <p>Magazine</p>
        <p>Outlet</p>
      </div>
      <div class="icons">
        <Image src="/images/user.png" width={100} height={24} />
        <Image src="/images/search.png" width={100} height={24} />
        <Image src="/images/shopping-bag.png" width={100} height={24} />
      </div>
    </nav>
  );
};

export default NavAndHeader;
