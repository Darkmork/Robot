
import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";

// Helper to generate rotation transition configuration
const getRotationTransition = (duration: number, from: number, loop: boolean = true) => ({
  from: from,
  rotate: from + 360, // Ensure rotate is part of the target for framer-motion v11+
  ease: "linear",
  duration: duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

// Helper to generate combined transition configuration
const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from).rotate, // Target value
  scale: 1, // Target value
  transition: { // transition object for framer-motion v11+
    rotate: { 
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        type: "tween"
    },
    scale: {
        type: "spring",
        damping: 20,
        stiffness: 300,
    },
  }
});


interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "speedUp" | "slowDown" | "pause" | "goBonkers" | null;
  className?: string;
  baseRadius?: number; // Approximate radius for text placement
}

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
  baseRadius = 60, // e.g. for a 150px container, radius is ~60-70px for letters
}) => {
  const letters = Array.from(text);
  const controls: AnimationControls = useAnimation();
  const [currentRotation, setCurrentRotation] = useState(0);

  useEffect(() => {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration, currentRotation).transition,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spinDuration, controls, onHover, text]); // currentRotation removed to avoid re-triggering on every update

  const handleHoverStart = () => {
    if (!onHover) return;
    let newDuration = spinDuration;
    let newScale = 1;

    switch (onHover) {
      case "slowDown":
        newDuration = spinDuration * 2;
        break;
      case "speedUp":
        newDuration = spinDuration / 4;
        break;
      case "pause":
        controls.stop(); // More direct way to pause
        controls.start({ 
            rotate: currentRotation, // Maintain current rotation
            scale: 1, 
            transition: { duration: 0.1 } 
        }); 
        return; // Exit early for pause
      case "goBonkers":
        newDuration = spinDuration / 20;
        newScale = 0.8;
        break;
      default:
        break;
    }
    controls.start({
      rotate: currentRotation + 360,
      scale: newScale,
      transition: getTransition(newDuration, currentRotation).transition,
    });
  };

  const handleHoverEnd = () => {
    if (onHover === "pause") { // Ensure it restarts correctly after pause
        controls.start({
            rotate: currentRotation + 360, // Restart rotation from current point
            scale: 1,
            transition: getTransition(spinDuration, currentRotation).transition,
        });
    } else if (onHover) { // For other hover effects, revert to original speed
        controls.start({
            rotate: currentRotation + 360,
            scale: 1,
            transition: getTransition(spinDuration, currentRotation).transition,
        });
    }
  };
  
  const letterRadius = baseRadius; // Use the prop for dynamic radius

  return (
    <motion.div
      initial={{ rotate: 0 }}
      className={`circular-text ${className}`}
      style={{ width: `${letterRadius * 2 + 30}px`, height: `${letterRadius * 2 + 30}px`}} // Adjust size based on radius
      animate={controls}
      onUpdate={(latest: any) => { // Type latest as any or define a specific type
        if (typeof latest.rotate === 'number') {
           setCurrentRotation(latest.rotate % 360); // Keep rotation within 0-360
        }
      }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const angle = (360 / letters.length) * i - 90; // -90 to start from top
        const x = letterRadius * Math.cos(angle * (Math.PI / 180));
        const y = letterRadius * Math.sin(angle * (Math.PI / 180));

        return (
          <motion.span
            key={i}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle + 90}deg)`, // +90 to make letters upright
              transformOrigin: 'center center',
            }}
            className="text-sm dark:text-accent-sky text-blue-600"
          >
            {letter}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
