import express from "express"

const router = express.Router()

router
    .get('/', (req, res) => {
        res.status(202).send('Tela inicial. Olá ;D')
    })

export default router