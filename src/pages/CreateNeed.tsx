import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateNeed() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storedNgo = localStorage.getItem("ngo");
    if (!storedNgo) return;

    const ngo = JSON.parse(storedNgo);

    const newNeed = {
      id: crypto.randomUUID(),
      title,
      description,
      ngoName: ngo.name,
    };

    const existingNeeds =
      JSON.parse(localStorage.getItem("needs") || "[]");

    localStorage.setItem(
      "needs",
      JSON.stringify([...existingNeeds, newNeed])
    );

    navigate("/needs");
  };

  return (
    <div>
      <h1>Create a Need</h1>
      <p>Describe what your organization needs</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit">Create Need</button>
      </form>
    </div>
  );
}
