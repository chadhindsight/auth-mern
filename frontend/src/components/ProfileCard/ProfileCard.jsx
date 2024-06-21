"use client";
import React, { useState, useContext } from "react";
import styles from "./ProfileCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "@/app/context/authContext";
import Form from "@/components/Form/Form";

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { updateUserProfile, user } = useContext(AuthContext);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleFormSubmit = async (e, email, password) => {
    e.preventDefault();
    try {
      await updateUserProfile({ email, password });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <section className={styles.card}>
      {isEditing ? (
        <Form
          onSubmit={handleFormSubmit}
          formType="edit"
          styles={styles}
          initialEmail={user.email}
        />
      ) : (
        <>
          <button className={styles.editIcon} onClick={handleEditClick}>
            <FontAwesomeIcon icon={faPencilAlt} />
          </button>
          <header className={styles.header}>
            <figure className={styles.picture}>
              <img src="profile-picture.jpg" alt="Profile Picture" />
            </figure>
            <div className={styles.info}>
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
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
