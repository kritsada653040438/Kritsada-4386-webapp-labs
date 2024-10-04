import React from "react";
export function GitHubInfo({users} , size = 50) {
  return (
    <div>
      <img
        src={users.imgURL}
        alt="GitHub Avatar"
        style={{ width: size, height: size }}
      />
      <h3>
        <a href={users.url} target="_blank" rel="noopener noreferrer">
          GitHub repository
        </a>
      </h3>
    </div>
  );
}
