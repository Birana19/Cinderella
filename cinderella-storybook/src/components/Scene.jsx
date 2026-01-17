// src/components/Scene.jsx
import "../styles/animations.css";

function Scene({ scene }) {
  return (
    <div className="scene fade-in">
      <img
        src={scene.image}
        alt={scene.title}
        className="scene-image"
      />

      <div className="scene-content">
        <h2>{scene.title}</h2>
        <p>{scene.text}</p>
      </div>
    </div>
  );
}

export default Scene;
