"use client";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/context/authContext";
import { useContext, useState } from "react";
import styles from "./temp.module.css";
import Toast from "@/components/Toast/Toast";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true); // Modal opens by default
  const [formType, setFormType] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const { login, signup } = useContext(AuthContext);
  const router = useRouter();

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
      setToastMessage("Success! Redirecting to home page...");
      setShowToast(true);
      closeModal();
      setTimeout(() => {
        setShowToast(false);
        router.push("/"); // Redirect to home page
      }, 2000);
    } catch (error) {
      setToastMessage("Error: " + error.message);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
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
      {showToast && <Toast message={toastMessage} />}
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
