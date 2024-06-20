"use client";
import React from "react";
import styles from "./ProfileCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Toast from "../Toast/Toast";

const ProfileCard = () => {
  return (
    <section className={styles.card}>
      <header className={styles.header}>
        <figure className={styles.picture}>
          <img src="profile-picture.jpg" alt="Profile Picture" />
        </figure>
        <div className={styles.info}>
          <h2>CodingLab</h2>
          <p>YouTuber & Blogger</p>
        </div>
      </header>
      <nav className={styles.actions}>
        <a href="#" className={styles.actionLink}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="#" className={styles.actionLink}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <button className={styles.logoutBtn}>Logout</button>
      </nav>
    </section>
  );
};

export default ProfileCard;
