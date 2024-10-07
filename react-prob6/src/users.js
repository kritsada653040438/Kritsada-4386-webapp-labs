import { useState } from "react";
import { users } from "./user.js";

export default function Ga() {
  const [index, setIndex] = useState(0);
  const [showmore, setShowmore] = useState(false);

  function handleNextClick() {
    if (index < users.length - 1) setIndex(index + 1);
    setShowmore(false);
  }
  
  function handlePrevClick() {
    if (index > 0) setIndex(index - 1);
    setShowmore(false);
  }
  
  function handleShowClick() {
    setShowmore(!showmore);
  }

  let user = users[index];

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Sample GitHub Repositories</h1>
        <h3>
          <a href={user.url} target="_blank" rel="noopener noreferrer">
            {user.alt}
          </a>
        </h3>
        <img src={user.imgURL} alt={user.alt} />
        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <button onClick={handleShowClick} style={{ backgroundColor: "lightblue", margin: "20px" }}>
            {showmore ? "Hide Followers" : "Show Followers"}
          </button>
          {showmore && <p>Followers: {user.followers}</p>}
        </div>
      </div>
      <div style={{ textAlign: "center", position: "absolute", left: "0", right: "0", bottom: "50px" }}>
        <button
          onClick={handlePrevClick}
          style={{ backgroundColor: "orange", marginRight: "680px" }}
          disabled={index === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNextClick}
          style={{ backgroundColor: "greenyellow", marginLeft: "680px" }}
          disabled={index === users.length - 1}
        >
          Next
        </button>
      </div>
    </>
  );
}
