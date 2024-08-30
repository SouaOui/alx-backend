 
## Install node redis using NPM (or YARN)

Run the following NPM command to install the Redis client.

```
npm install redis
```

## Write your application Code : 

Use the following sample code for our Node.js application:

```
import { createClient } from 'redis';

async function nodeRedisDemo() {
  try {
    const client = createClient();
    await client.connect();

    await client.set('mykey', 'Hello from node redis');
    const myKeyValue = await client.get('mykey');
    console.log(myKeyValue);

    const numAdded = await client.zAdd('vehicles', [
      {
        score: 4,
        value: 'car',
      },
      {
        score: 2,
        value: 'bike',
      },
    ]);
    console.log(`Added ${numAdded} items.`);

    for await (const { score, value } of client.zScanIterator('vehicles')) {
      console.log(`${value} -> ${score}`);
    }

    await client.quit();
  } catch (e) {
    console.error(e);
  }
}

nodeRedisDemo();
```
in the case of CommonJs Syntax using 

const { createClient } from 'redis'

instead of ES syntax that uses import it's preferable 


# Connect to Redis
redis-cli

# View all elements with scores
ZRANGE vehicles 0 -1 WITHSCORES

# Get elements within a score range (e.g., scores between 2 and 4)
ZRANGEBYSCORE vehicles 2 4 WITHSCORES

# Get the score of a specific element (e.g., 'car')
ZSCORE vehicles car

# Count the number of elements in the sorted set
ZCARD vehicles

