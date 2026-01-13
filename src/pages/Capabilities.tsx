import Card from "../components/Card";
import { capabilities } from "../data/capabilities";

export default function Capabilities() {
  return (
    <>
      <h1>Capabilities</h1>
      <p>Discover skills, resources, and services offered by the community.</p>

      <ul>
        {capabilities.map((cap) => (
        <Card
          key={cap.id}
          title={cap.title}
          description={cap.description}
          footer={cap.provider}
        />
        ))}
      </ul>
    </>
  );
}
