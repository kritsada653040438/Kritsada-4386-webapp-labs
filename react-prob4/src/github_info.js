import React from "react";
export function GitHubInfo({users} , size = 50) {
  if (users.followers > 10000) {
    return (
      <div>
        <h2>{users.alt}</h2>
        <img
          src={users.imgURL}
          alt="GitHub Avatar"
          style={{ width: size, height: size }}
        />
        <h3>
          <a href={users.url} target="_blank" rel="noopener noreferrer">
            GitHub repository ({users.followers} followers)
          </a>
        </h3>
      </div>
    );
  }else{
  return (
    <div>
      <h2>{users.alt}</h2>
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
}}
