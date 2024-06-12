import Image from "next/image";
import React from "react";
import styles from "./NavBar.module.css";

const NavAndHeader = () => {
  return (
    <nav className={styles.navBar}>
      <h1>Furniture</h1>
      <section className={styles.navigation}>
        <p className={styles.highlight}>Just In</p>
        <p>Furniture</p>
        <p>Rest</p>
        <p>Decoration</p>
        <p>Outdoor</p>
        <p>Magazine</p>
        <p>Outlet</p>
      </section>
      <div className={styles.icons}>
        <Image src="/images/user.png" width={25} height={24} />
        <Image src="/images/search.png" width={25} height={24} />
        <Image src="/images/shopping-bag.png" width={25} height={24} />
      </div>
    </nav>
  );
};

export default NavAndHeader;
