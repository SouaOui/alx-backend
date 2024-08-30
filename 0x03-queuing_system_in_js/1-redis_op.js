const { createClient } = require('redis');

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

client.connect();

async function setNewSchool(schoolName, value) {
    try {
        const reply = await client.set(schoolName, value);
        console.log(`reply: ${reply}`);
    } catch (err) {
        console.error('Error:', err);
    }
}

async function displaySchoolValue(schoolName) {
    try {
        const value = await client.get(schoolName);
        console.log(`${schoolName}: ${value}`);
    } catch (err) {
        console.error('Error:', err);
    }
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

client.quit();
