"use client";
import Image from "next/image";
import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const iconValues = [
    "/images/user.png",
    "/images/search.png",
    "/images/shopping-bag.png",
  ];

  const navItemValues = [
    { name: "Just In", className: styles.highlight },
    { name: "Furniture" },
    { name: "Rest" },
    { name: "Decoration" },
    { name: "Outdoor" },
    { name: "Magazine" },
    { name: "Outlet" },
  ];

  return (
    <nav className={styles.navBar}>
      <h1>Furniture</h1>
      <section className={styles.navigation}>
        {navItemValues.map((item, index) => (
          <p key={item.name} className={item.className || ""}>
            {item.name}
          </p>
        ))}
      </section>

      <div className={styles.icons}>
        {iconValues.map((iconSrc, index) => (
          <Image key={index} src={iconSrc} width={25} height={24} alt="" />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
