import {GitHubInfo} from './github_info.js';
import './App.css';
import {users} from './user.js';

function App() {

  return (
    <div className="App">
      <GitHubInfo users={users[0]}/>
      <GitHubInfo users={users[1]}/>
      <GitHubInfo users={users[2]}/>
    </div>
  );
}

export default App;
