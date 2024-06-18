"use client";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/context/authContext";
import { useContext, useState, useEffect } from "react";
import styles from "./temp.module.css";
import Toast from "@/components/Toast/Toast";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true); // Modal opens by default
  const [formType, setFormType] = useState(null);
  const { login, signup } = useContext(AuthContext);

  const closeModal = () => {
    setIsOpen(false);
    setFormType(null);
  };

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    try {
      if (formType === "login") {
        await login(email, password);
      } else if (formType === "signup") {
        await signup(email, password);
      }
      closeModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section>
      {isOpen && (
        <dialog className={styles.modal} open>
          <article className={styles.modalContent}>
            <button className={styles.close} onClick={closeModal}>
              &times;
            </button>
            {formType ? (
              <Form
                onSubmit={handleSubmit}
                formType={formType}
                styles={styles}
              />
            ) : (
              <div className={styles.buttonContainer}>
                <button
                  onClick={() => setFormType("login")}
                  className={styles.authButton}
                >
                  Log In
                </button>
                <button
                  onClick={() => setFormType("signup")}
                  className={styles.authButton}
                >
                  Sign Up
                </button>
              </div>
            )}
          </article>
        </dialog>
      )}
    </section>
  );
};

const Form = ({ onSubmit, formType, styles }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleFormSubmit = (e) => {
    onSubmit(e, email, password);
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        className={styles.input}
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <input
        className={styles.input}
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <button className={styles.submitButton} type="submit">
        {formType === "login" ? "Log In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Modal;
