import express from "express";
import db from "./dbConfig";
import routes from "./routes/routes-index"
import userRoutes from "./routes/routes-jogador"

db.on("error", console.log.bind(console, 'Houve algum erro na hora de se conectar ao banco!'));
db.once("open", () => {
    console.log('Conexão feita com êxito!')
})

const app = express()
app.use(express.json())

app.use(routes)
app.use(userRoutes)


export default app