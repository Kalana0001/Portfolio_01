import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div>
    <span className="mr-4">I am a</span>
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Mobile App Developer",
          "Postman Student Expert",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
  );
}

export default Type;
