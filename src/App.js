import { useState } from "react";
import IdeaForm from "./components/IdeaForm";
import "./styles.css";

export default function App() {
  const [ideas, setIdeas] = useState([]);

  const handleIdeaSubmit = (data) => {
    const newIdea = { ...data };
    setIdeas([...ideas, newIdea]);
  };

  return (
    <div className="App">
      <IdeaForm onSubmit={handleIdeaSubmit} />
      <ul>
        {ideas.map((idea, index) => (
          <li key={index}>
            <p>Name: {idea.name}</p>
            <p>Email: {idea.email}</p>
            <p>Funding Need: {idea.funding}</p>
            <p>Description: {idea.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
