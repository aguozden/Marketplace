import { needs } from "../data/needs";

export default function Needs() {
  return (
    <>
      <h1>Needs</h1>
      <p>Browse requests from people and organizations that need help.</p>

      <ul>
        {needs.map((need) => (
          <li key={need.id}>
            <h3>{need.title}</h3>
            <p>{need.description}</p>
            <small>{need.organization}</small>
          </li>
        ))}
      </ul>
    </>
  );
}
