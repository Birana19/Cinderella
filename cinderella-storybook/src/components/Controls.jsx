// src/components/Controls.jsx
import "../styles/controls.css"; 
function Controls({ onNext, onPrev, onRestart, isFirst, isLast }) {
  return (
    <div className="controls">
      <button onClick={onPrev} disabled={isFirst}>
        ◀ Previous
      </button>

      {!isLast && (
        <button onClick={onNext}>
          Next ▶
        </button>
      )}

      {isLast && (
        <button onClick={onRestart}>
          Restart Story 🔁
        </button>
      )}
    </div>
  );
}

export default Controls;
