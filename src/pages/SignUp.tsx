import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const ngo = {
      name,
      email,
    };

    localStorage.setItem("ngo", JSON.stringify(ngo));
    console.log(localStorage.getItem("ngo"));

    localStorage.setItem("ngo", JSON.stringify(ngo));
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>NGO Sign Up</h1>
      <p>Register your organization</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="NGO Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
