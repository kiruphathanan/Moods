import React from 'react'

export default function MoodDisplay({mood}) {

    const moods={
        happy:"keep smiling",
        sad:"its okay to be sad sometimes",
        crying:"take a deep breath",
        sleepy:"wash your face",
    };
  return (
    <div>
      {mood ?<p>{moods[mood]}</p>:<p>select your mood</p>}
    </div>
  );
  
}
// export default MoodDisplay;
