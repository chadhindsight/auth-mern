import React from "react";
import styles from "./ProfileCard.module.css";

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
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className={styles.actionLink}>
          <i className="fas fa-envelope"></i>
        </a>
        <button className={styles.logoutBtn}>Logout</button>
      </nav>
    </section>
  );
};

export default ProfileCard;
