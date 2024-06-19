"use client";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch("/api/users/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        // Authentication failed, handle the error
        throw new Error("Authentication failed");
      }
    } catch (error) {
      console.error("Sorry, something went wrong", error);
      throw error;
    }
  };

  const signup = async (email, password) => {
    try {
      const response = await fetch("/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Signup failed");
      }
    } catch (error) {
      console.error("Sorry, something went wrong", error);
      throw error;
    }
  };

  const updateUserProfile = async (userData) => {
    try {
      const response = await fetch("/api/users/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser);
      } else {
        throw new Error("Sorry, cannot update at this time");
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setUser(null);
      } else {
        throw new Error("Logout failed");
      }
    } catch (error) {
      console.error("Sorry, something went wrong", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, signup, updateUserProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
