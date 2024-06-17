"use client";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/context/authContext";
import { useContext } from "react";
import Toast from "@/components/Toast/Toast";

const AuthPage = () => {
  const router = useRouter();

  const { login, logout, user } = useContext(AuthContext);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    try {
      await login(email, password);
      // Redirect to the home page or perform other actions
      router.push("/");
    } catch (error) {
      // Handle login error
      setShowToast(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      {showToast && (
        <Toast
          message="Login failed. Please check your credentials."
          onClose={handleCloseToast}
        />
      )}
    </>
  );
};

export default AuthPage;
