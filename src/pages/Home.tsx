import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1>Marketplace solidario</h1>
      <p>Conectando necesidades con capacidades</p>

      <Link to="/login">Ir a Login</Link>
    </section>
  );
}