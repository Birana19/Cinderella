// src/components/Scene.jsx
import "../styles/scene.css";


function Scene({ scene }) {
  return (
    <div
      className="scene fade-in"
      style={{ backgroundImage: `url(${scene.image})` }}
    >
      <div className="scene-overlay">
        <h2>{scene.title}</h2>
        <p>{scene.text}</p>
      </div>
    </div>
  );
}

export default Scene;
