const express = require('express')
const app = express()
const {getUsers, addUser, findUserByUid, updateUserByUid, removeUserByUid}= require('./data/users')
const pino = require('pino-http')()
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(pino)

const router = express.Router()


app.use(express.json())
// POST usuarios
router.post('/users', async (req, res) => {
    try {
        logger.info("Solicitud recibida en POST /users");
        logger.info("Datos recibidos:", req.body); // 👈 Verifica qué está llegando

        const { uid, name, age, adress } = req.body;
        if (!name || !age || !adress) {
            return res.status(400).send({ error: "Faltan datos obligatorios" });
        }

        await addUser({ uid, name, age, adress });
        return res.status(201).send({ message: 'Usuario creado con éxito' });

    } catch (error) {
        console.error("Error en POST /users:", error);
        return res.status(500).send({ error: error.message });
    }
});

// GET ALL
router.get('/users', async (req, res) => {
    try {
        const users = await getUsers()
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
})

// GET by ID
router.get('/users/:uid', async (req, res) => {
    try {
        const {uid} = req.params
        const user = await findUserByUid({uid})
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
})

// UPDATE users
router.put('/users/:uid', async (req, res) => {
    try {
        const {name, age, adress} = req.body
        const {uid} = req.params
        const usersUpdated = await updateUserByUid({uid, name, age, adress})
        return res.status(200).send(usersUpdated)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
})

// DELETE users
router.delete('/users/:uid', async (req, res) => {
    try {
        const {uid} = req.params
        const usersUpdated = await removeUserByUid({uid})
        return res.status(200).send(usersUpdated)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
})

app.use(router)
module.exports = app