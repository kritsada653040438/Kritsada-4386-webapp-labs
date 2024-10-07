import {GitHubInfo} from './github_info.js';
import './App.css';
import {users} from './user.js';

function App() {
  const Popular_user = users.filter((user) => user.followers > 10000).map((user) => <GitHubInfo users={user}/>);
  return (
    <div className="App">
      <h1>Sample GitHub Repositories</h1>
      <ol>
      {Popular_user}
      </ol>
    </div>
  );
}

export default App;
