import { useState } from "react";

const Register = ({ onRegister }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const submitHandler = (e) => {
    e.preventDefault();
    onRegister(form);
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button>Register</button>
    </form>
  );
};

export default Register;