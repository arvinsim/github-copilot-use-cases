import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
  };

  // TODO: Code Review Assistance - What accessibility improvements can one do?
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Username
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </label>
          </div>
          <div>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;