import React, { useState, useEffect } from "react";

function GitHubUser({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (data) {
    console.log("My data ", data);
    // return <div>{JSON.stringify(data)}</div>;
    return (
      <div>
        <h2>Login Name: {data.login}</h2>
        <img src={data.avatar_url} width={260} />
      </div>
    );
  } else {
    return null;
  }
}

export default GitHubUser;
