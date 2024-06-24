import React, { useState } from "react";

const Form = ({ onSubmit, formType, styles, initialEmail }) => {
  const [emailAddy, setEmailAddy] = useState(initialEmail || "");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmailAddy(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(e, emailAddy, password);
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        className={styles.input}
        type="email"
        value={emailAddy}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      {formType !== "edit" && (
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
      )}
      <button className={styles.submitButton} type="submit">
        {formType === "login"
          ? "Log In"
          : formType === "signup"
          ? "Sign Up"
          : "Save"}
      </button>
    </form>
  );
};

export default Form;
