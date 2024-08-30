#!/usr/bin/env node

const { createClient } = require('redis');

async function connectRedis() {

  const client = createClient();

  client.on('error', (err) => {
    console.log('Redis client not connected to the server:', err.toString());
  });

  client.on('connect', () => {
    console.log('Redis client connected to the server');
  });

  await client.connect();

  await client.quit();
}

connectRedis().catch(console.error);

