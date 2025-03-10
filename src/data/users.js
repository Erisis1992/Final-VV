const db = require('../db')

async function getUsers() {
    const result = await db.query('SELECT * FROM users');
    return result.rows;
}

async function addUser({ uid, name, age, address }) {
    await db.query('INSERT INTO users (uid, name, age, address) VALUES ($1, $2, $3, $4)', [uid, name, age, address]);
}

async function findUserByUid({ uid }) {
    const result = await db.query('SELECT * FROM users WHERE uid = $1', [uid]);
    return result.rows[0];
}

async function updateUserByUid({ uid, name, age, address }) {
    await db.query('UPDATE users SET name = $2, age = $3, address = $4 WHERE uid = $1', [uid, name, age, address]);
}

async function removeUserByUid({ uid }) {
    await db.query('DELETE FROM users WHERE uid = $1', [uid]);
}

module.exports = { getUsers, addUser, findUserByUid, updateUserByUid, removeUserByUid };
