"use client";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/context/authContext";
import { useContext, useState } from "react";
import styles from "./authPage.module.css";
import Toast from "@/components/Toast/Toast";
import Form from "@/components/Form/Form";

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

export default Modal;
