import React from "react";
export function GitHubInfo({users}) {
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
} 
