import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express(); // definiçao da funçao da variavel app e ao colocar () significa comando de execução

app.use(cors()); // habilite o cors no servidor middleware - estão entre a requisição do navegador e o controlador (controllers)
app.use(express.json()); // habilite o json no servidor # middleware
app.use(routes); // habilite rotas no servidor # dentro do routes pode existir middlerwares
app.listen(3333); // servidor escuta nessa porta # definição da porta é feita pelo dev. livre escolha.

