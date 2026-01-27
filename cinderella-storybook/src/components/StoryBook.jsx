// src/components/StoryBook.jsx
import { useState } from "react";
import { storyData } from "../data/storyData";
import Scene from "./Scene";
import Controls from "./Controls";
//import AudioPlayer from "./AudioPlayer";
import "../styles/storybook.css";

function StoryBook() {
  const [showCover, setShowCover] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);

  const scenes = storyData.scenes;

  const handleStart = () => {
    setShowCover(false);
  };

  const handleNext = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1);
    }
  };

  const handlePrev = () => {
    if (currentScene > 0) {
      setCurrentScene(currentScene - 1);
    }
  };

  const handleRestart = () => {
    setCurrentScene(0);
    setShowCover(true);
  };

  // Cover Screen
  if (showCover) {
    return (
      <div className="storybook-cover">
        <img
          src={storyData.cover.image}
          alt="Story Cover"
          className="cover-image"
        />
        <h1>{storyData.cover.title}</h1>
        <h3>{storyData.cover.subtitle}</h3>
        <p>{storyData.cover.description}</p>

        <button className="start-btn" onClick={handleStart}>
          Start Story
        </button>

        
      </div>
    );
  }

  return (
    <div className="storybook-container">
      <Scene scene={scenes[currentScene]} />

      <Controls
        onNext={handleNext}
        onPrev={handlePrev}
        onRestart={handleRestart}
        isFirst={currentScene === 0}
        isLast={currentScene === scenes.length - 1}
      />

      <AudioPlayer />
    </div>
  );
}

export default StoryBook;
