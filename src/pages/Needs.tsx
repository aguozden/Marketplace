import Card from "../components/Card";
import { needs } from "../data/needs";

export default function Needs() {
  return (
    <>
      <h1>Needs</h1>
      <p>Browse requests from people and organizations that need help.</p>

      <ul>
        {needs.map((need) => (
          <Card
            key={need.id}
            title={need.title}
            description={need.description}
            footer={need.organization}
          />
        ))}
      </ul>
    </>
  );
}
