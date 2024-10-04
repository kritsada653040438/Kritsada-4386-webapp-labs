import "./App.css";
import { GitHubAvatar, GitHubRepoURL } from "./github_data.js";
function GithunInfo() {
  const userInfo = {
    url: "https://github.com/kritsada653040438",
    imgURL: "https://avatars.githubusercontent.com/kritsada653040438",
    alt: "Kritsada   mahanam",
  };
  return (
    <div class="app">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar avatarUrl={userInfo.imgURL} />
      <GitHubRepoURL url={userInfo.url} />
    </div>
  );
}

export default GithunInfo;
