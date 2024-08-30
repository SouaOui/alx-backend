#!/usr/bin/env node 
const { createClient } = require('redis');

async function connectRedis() {
  console.log('Starting Redis connection...');

  const client = createClient({
    socket: {
      host: '127.0.0.1',
      port: 6379
    }
  });

  client.on('error', (err) => {
    console.log('Redis client not connected to the server:', err.toString());
  });

  client.on('connect', () => {
    console.log('Redis client connected to the server');
  });

  await client.connect();

  console.log('End of script.');

  // Close the client connection to allow the script to exit
  await client.quit();
}

connectRedis().catch(console.error);
