import { useState } from "react";

const Count = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const increaseAsync = () => {
    setTimeout(() => {
      setNumber((currentNumber) => currentNumber + 1);
    }, 1000);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={increaseAsync}>Increase Async</button>
    </div>
  );
};

const User = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <span>Email: {user?.email}</span>
      <span>Password: {user?.password}</span>
    </div>
  );
};

const UserUpdate = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState({
    email: "johndoe@example.com",
    password: "john@123",
  });

  const changeUser = () => {
    setUser((currentUser) => ({ ...currentUser, email: input }));
  };

  console.log(user);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter email address..."
      />
      <button onClick={changeUser}>Change email</button>
      <h1>Email: {user?.email}</h1>
    </div>
  );
};

const SingleOnChange = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    country: "",
    city: "",
  });

  const handleChange = (e) => {
    setUser((currentUser) => ({
      ...currentUser,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(user);

  return (
    <div>
      <form>
        <input
          type="text"
          name="first_name"
          onChange={handleChange}
          placeholder="First name"
        />
        <input
          type="text"
          name="last_name"
          onChange={handleChange}
          placeholder="Last name"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="text"
          name="country"
          onChange={handleChange}
          placeholder="Country"
        />
        <input
          type="text"
          name="city"
          onChange={handleChange}
          placeholder="City"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default function State() {
  return (
    <div>
      <SingleOnChange />
    </div>
  );
}
