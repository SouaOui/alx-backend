import { createClient } from 'redis';

// Create a Redis client
const client = createClient({
  url: 'redis://localhost:6379'
});

// Handle the connection event
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Handle the error event
client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

// Optionally, you can add a small delay before exiting the script
// to give time for connection and error events to be logged.
setTimeout(() => {
  client.quit();
}, 5000);

