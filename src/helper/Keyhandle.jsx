const continuousAnimations = ["walk", "FastRun", "Fly", "FrontFlip", "Jump", "LongJump", "PushUp"];

// Handle key down event
export const handleKeyDown = (event, setAnimation) => {
  switch (event.key) {
    case 'd':
    case 'a':
    case 'w':
    case 's':
      setAnimation("walk");
      break;
    case 'b':
      setAnimation("Punch");
      break;
    case 'f':
      setAnimation("Fly");
      break;
    case 't':
      setAnimation("sitTalk");
      break;
    case 'j':
      setAnimation("Jump");
      break;
    case 'h':
      setAnimation("Dance");
      break;
    case 'g':
      setAnimation("Sing");
      break;
    case 'p':
      setAnimation("PushUp");
      break;
    case '1':
      setAnimation("normal");
      break;
    case '2':
      setAnimation("sit");
      break;
    case '3':
      setAnimation("LongJump");
      break;
    case '4':
      setAnimation("Turn");
      break;
    case '5':
      setAnimation("FastRun");
      break;
    default:
      break;
  }
};

// Handle key up event
export const handleKeyUp = (event, setAnimation, animation) => {
  if (!continuousAnimations.includes(animation) && ['a', 'w', 's', 'd'].includes(event.key)) {
    setAnimation("normal");
  }
};
