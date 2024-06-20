"use client";
import React, { useState } from "react";
import styles from "./ProfileCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const ProfileCard = () => {
  // NB: see example use case in /auth page
  const [formType, setFormType] = useState(null);
  // TODO: context, updateUser*

  //TO updateUser, you can use the same form defined in auth,
  // FLow: a user clicks on the edit button which brings up a form where they can change their user name

  return (
    <section className={styles.card}>
      <button className={styles.editIcon}>
        <FontAwesomeIcon icon={faPencilAlt} />
      </button>
      <header className={styles.header}>
        <figure className={styles.picture}>
          <img src="profile-picture.jpg" alt="Profile Picture" />
        </figure>
        <div className={styles.info}>
          <h2>Furniture Associate</h2>
          <p>Lorem Ipsum Deez</p>
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
