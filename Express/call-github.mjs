import axios from 'axios';
import express from 'express';

const app = express(); 
const port = 8082;

async function getGithubUserData() {
  try {
    const response = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `token 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` 
      }
    });
    const data = response.data;
    console.log(`GitHub user name is ${data.name} who lives in ${data.location}`);
    return response.data;
    
  } catch (error) {
    console.error('Error fetching the GitHub user data:', error);
    return null;
  }
}
app.get('/', async (req, res) => {
  const data = await getGithubUserData();
  if (data) {
    res.json(`GitHub user name is ${data.name} who lives in ${data.location}`);
  } else {
    res.status(500).json({ error: 'Unable to fetch data from GitHub' });
  }
});

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});

