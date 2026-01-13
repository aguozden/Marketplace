export default function Dashboard() {
  const ngo = JSON.parse(localStorage.getItem("ngo") || "{}");

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome, {ngo.name || "NGO"} 👋</p>

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
        <ul>
          <li>Create a Need</li>
          <li>Offer a Capability</li>
        </ul>
      </section>
    </div>
  );
}
