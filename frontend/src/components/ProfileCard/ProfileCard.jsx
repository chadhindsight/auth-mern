"use client";
import React, { useState } from "react";
import styles from "./ProfileCard.module.css";
import { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "@/app/context/authContext";

const ProfileCard = () => {
  // TODO: context, updateUser*

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const { updateUserProfile, user } = useContext(AuthContext);

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    // FLow: a user clicks on the edit button which brings up a form where they can change their user name
    //TO updateUser, you can use the same form defined in auth,
    try {
      await updateUserProfile({ email, password });
      setIsEditing(!setIsEditing);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <section className={styles.card}>
      {isEditing ? (
        <Form
          onSubmit={handleSubmit}
          formType="edit"
          styles={styles}
          initialEmail={user.email}
        />
      ) : (
        <>
          <button className={styles.editIcon}>
            <FontAwesomeIcon icon={faPencilAlt} onClick={handleEditClick} />
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
        </>
      )}
    </section>
  );
};

export default ProfileCard;
