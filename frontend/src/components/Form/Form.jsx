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
        {formType === "login"
          ? "Log In"
          : formType === "signup"
          ? "Sign Up"
          : "Edit"}
      </button>
    </form>
  );
};

export default Form;
