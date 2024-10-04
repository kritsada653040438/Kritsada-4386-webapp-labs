import React from 'react';
export function GitHubAvatar({ avatarUrl, size = 50 }) {
    return (
      <img
        src={avatarUrl}
        alt="GitHub Avatar"
        style={{ width: size, height: size, }}
      />
    );
}
export function GitHubRepoURL({ url }) {
  return (
    <h3>
    <a href={url} target="_blank" rel="noopener noreferrer">
      Visit my GitHub repository
    </a>
    </h3>
  );
}


