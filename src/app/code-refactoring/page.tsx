"use client";

import React, { useState, useEffect } from "react";

// TODO: Code refactoring -
// 1. Refactor this code to multiple smaller components
const UserProfile = () => {
  const [userData, setUserData] = useState<{
    name: string;
    email: string;
    location: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch user data:", error);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userData?.name}</p>
      <p>Email: {userData?.email}</p>
      <p>Location: {userData?.location}</p>
    </div>
  );
};

export default UserProfile;
