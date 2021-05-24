import React from "react";

function Hero({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("You are not a Hero");
  }

  return (
    <div>
      <h2>Hero: {heroName}</h2>
    </div>
  );
}

export default Hero;
