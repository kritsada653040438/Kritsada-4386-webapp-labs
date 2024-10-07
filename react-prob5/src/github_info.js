import React from "react";
export function GitHubInfo({users}) {
  if (users.followers > 10000) {
    return (
      <li>
        <img
          src={users.imgURL}
          alt={users.alt}
        />
          <a href={users.url} target="_blank" rel="noopener noreferrer">
          {users.alt}
          </a>
          ({users.followers} followers)
      </li>
    );
  }else{
  return (
    <li>
      <img
        src={users.imgURL}
        alt={users.alt}
        
      />
        <a href={users.url} target="_blank" rel="noopener noreferrer">
        {users.alt}
        </a>
    </li>
  );
}}
