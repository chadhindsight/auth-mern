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

  // Function to extract meaningful alt text using regex
  const getAltText = (src) => {
    // Regex pattern to extract text between '/images/' and '.png'
    const regex = /\/images\/(.*?)\.png/;
    const match = src.match(regex);
    // If match is found, return the captured group (text between '/images/' and '.png')
    return match ? match[1] : "Image";
  };

  return (
    <nav className={styles.navBar}>
      <h1>Furniture</h1>
      <section className={styles.navigation}>
        {navItemValues.map((item) => (
          <p key={item.name} className={item.className || ""}>
            {item.name}
          </p>
        ))}
      </section>

      <div className={styles.icons}>
        {iconValues.map((iconSrc, index) => (
          <Image
            key={index}
            src={iconSrc}
            width={25}
            height={24}
            alt={getAltText(iconSrc)}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
