"use client";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/app/context/authContext";
import { useContext } from "react";

const AuthPage = () => {
  const router = useRouter();

  const { login, logout, user } = useContext(AuthContext);

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
      alert("Bad!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default AuthPage;
