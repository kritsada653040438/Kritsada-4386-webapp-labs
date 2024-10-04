import express from 'express';
import axios from 'axios';

const app = express();
const port = 8082;

async function getIPAddress() {
  try {
    const response = await axios.get('https://httpbin.org/ip');
    return response.data.origin; 
  } catch (error) {
    console.error('Error fetching IP address:', error);
    return null;
  }
}

app.get('/ip', async (req, res) => {
  const ip = await getIPAddress();
  if (ip) {
    res.json({ip});
  } else {
    res.status(500).json({ error: 'Unable to fetch IP address' });
  }
});

app.listen(port, () => {
  console.log(`Running on  http://localhost:${port}/ip`);
});
