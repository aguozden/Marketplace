import { capabilities } from "../data/capabilities";

export default function Capabilities() {
  return (
    <>
      <h1>Capabilities</h1>
      <p>Discover skills, resources, and services offered by the community.</p>

      <ul>
        {capabilities.map((cap) => (
          <li key={cap.id}>
            <h3>{cap.title}</h3>
            <p>{cap.description}</p>
            <small>{cap.provider}</small>
          </li>
        ))}
      </ul>
    </>
  );
}
