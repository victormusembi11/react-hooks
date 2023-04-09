import { useState } from "react";

import AuthService from "./api/services/auth.service";

export default function Home() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const onChangeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (error) {
      setError(null);
    }

    try {
      const response = await AuthService.login(email, password);
      const authService = JSON.parse(localStorage.getItem("authService"));
      console.log(authService.user.access);
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="emailId"
          onChange={onChangeEmail}
        />
        <input
          type="password"
          name="password"
          id="passwordId"
          onChange={onChangePassword}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
