require('dotenv').config()

const app = require('./app')

const logger = require('pino')()

const port = process.env.PORT

app.listen(port , () =>{
    logger.info(`server escuchando en puerto ${port}`)
})