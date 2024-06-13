"use client";
import Image from "next/image";
import React from "react";
import styles from "./NavBar.module.css";

const NavAndHeader = () => {
  const iconValues = [
    "/images/user.png",
    "/images/search.png",
    "/images/shopping-bag.png",
  ];

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
        {iconValues.map((iconSrc, index) => (
          <Image key={index} src={iconSrc} width={25} height={24} alt="" />
        ))}
      </div>
    </nav>
  );
};

export default NavAndHeader;
