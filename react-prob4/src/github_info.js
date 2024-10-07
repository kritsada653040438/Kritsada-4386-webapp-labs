import React from "react";
export function GitHubInfo({users}) {
  if (users.followers > 10000) {
    return (
      <li>
        <img
          src={users.imgURL}
          alt={users.alt}
          
        />
        <h3>
          <a href={users.url} target="_blank" rel="noopener noreferrer">
          {users.alt} ({users.followers} followers)
          </a>
        </h3>
      </li>
    );
  }else{
  return (
    <li>
      <img
        src={users.imgURL}
        alt={users.alt}
        
      />
      <h3>
        <a href={users.url} target="_blank" rel="noopener noreferrer">
        {users.alt}
        </a>
      </h3>
    </li>
  );
}}
