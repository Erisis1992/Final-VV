const express = require('express')
const app = express()
const {getUsers, addUser, findUserByUid, updateUserByUid, removeUserByUid}= require('./data/users')
const pino = require('pino-http')()

app.use(pino)

const router = express.Router()


app.use(express.json())
//post usuarios
router.post('/users', (req, res) => {
    const {uid, name, age, address} = req.body
    addUser({uid, name, age, address})
    return res.status(201).send({message: 'success'})
})
//GET ALL
router.get('/users', (req, res) => {
    return res.status(200).send(getUsers())
})
//GET by ID
router.get('/users/:uid', (req, res) => {
    const {uid} = req.params
    const user = findUserByUid({uid})
    return res.status(200).send(user)
})
//UPDATE users
router.put('/users/:uid', (req, res) => {
    const {name, age, address} = req.body
    const {uid} = req.params
    const usersUpdated = updateUserByUid({uid, name, age, address})

    return res.status(200).send(usersUpdated)
})
//DELETE users
router.delete('/users/:uid', (req, res) => {
    const {uid} = req.params
    const usersUpdated = removeUserByUid({uid})
    return res.status(200).send(usersUpdated)
})

app.use(router)
module.exports = app