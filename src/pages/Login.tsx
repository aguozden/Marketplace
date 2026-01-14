import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ngos } from "../data/ngos";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const ngo = ngos.find((n) => n.email === email);

    if (!ngo) {
      alert("NGO not found");
      return;
    }

    localStorage.setItem("ngo", JSON.stringify(ngo));
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="NGO email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
