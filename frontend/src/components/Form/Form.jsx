import React, { useState } from "react";

const Form = ({ onSubmit, formType, styles, initialEmail }) => {
  const [email, setEmail] = useState(initialEmail || "");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(e, email, password);
  };
  // BS push
  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <input
        className={styles.input}
        type="email"
        value={email}
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
