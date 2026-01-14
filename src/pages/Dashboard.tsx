import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const ngo = JSON.parse(localStorage.getItem("ngo") || "null");

  useEffect(() => {
    if (!ngo) {
      navigate("/signup");
    }
  }, [ngo, navigate]);

  if (!ngo) return null;

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome, {ngo.name} 👋</p>

      <section>
        <h2>Your profile</h2>
        <p>
          <strong>Email:</strong> {ngo.email}
        </p>
        <p>
          <strong>Organization:</strong> {ngo.name}
        </p>
      </section>

      <section>
        <h2>Next steps</h2>
        <button onClick={() => navigate("/needs/new")}>
          Create a Need
        </button>
      </section>
    </div>
  );
}
