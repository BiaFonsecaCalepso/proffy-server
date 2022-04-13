import express from "express";

const routes = express.Router();

routes.get("/", function(req, res){ //get - buscar, patch/put - atualizar, post - criar, delete - deletar
    return res.json("Hello");
});

export default routes;
