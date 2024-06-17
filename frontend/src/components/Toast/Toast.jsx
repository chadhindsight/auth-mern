import React, { useEffect } from "react";
import styles from "./Toast.module.css";

const Toast = ({ message, duration = 4000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  return (
    <div className={styles.toast}>
      <span>{message}</span>
      <button className={styles["toast-close"]} onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
