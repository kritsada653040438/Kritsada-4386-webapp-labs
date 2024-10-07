import {GitHubInfo} from './github_info.js';
import './App.css';
import {users} from './user.js';

function App() {

  return (
    <div className="App">
      <h1>Sample GitHub Repositories</h1>
      <ol>
      <GitHubInfo users={users[0]}/>
      <GitHubInfo users={users[1]}/>
      <GitHubInfo users={users[2]}/>
      </ol>
    </div>
  );
}

export default App;
