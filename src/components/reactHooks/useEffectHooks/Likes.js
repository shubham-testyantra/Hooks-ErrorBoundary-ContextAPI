import React, { useState, useEffect } from "react";

function Likes() {
  const [likes, setLikes] = useState(0);

  //using useEffect()

  useEffect(() => {
    document.title = `Your Profile Likes ${likes}`;
  });
  return (
    <div>
      <h2>Current Likes:{likes}</h2>
      <button className="btn btn-danger" onClick={() => setLikes(likes + 1)}>
        Likes +
      </button>
    </div>
  );
}

export default Likes;
