const { createClient } = require("redis"); // Option 2 (CommonJS)

async function main() {
  const client = createClient();

  client.on("error", (err) => console.log("Redis Client Error", err));

  // Await the connection before proceeding
  await client.connect();

  // Your Redis operations here

  // Close connection (optional)
  await client.quit();
}

main();
/*const redis = require('redis');
// Create a Redis client
const client = redis.createClient({
  host: '127.0.0.1', // Redis server host
  port: 6379,        // Redis server port
});

// Test the connection
client.on('connect', () => {
  console.log('Connected to Redis server');
});*/
