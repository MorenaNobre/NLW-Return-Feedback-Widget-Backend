import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();


//uma forma de controle de segurança no backend para
//#NewSkills
app.use(cors());

//middleware - como se fosse um plugin para o express
app.use(express.json());

//rotas
app.use(routes)

app.listen(3333, () => {
  console.log("HTTP server  running!");
});

//SQLite
//ORM - Object-Relational Mapping - passa linhas para objeto.
//Prisma - suporta multiplo bancos de dados (transição)

//Metodos HTTP - GET - POST - PUT - PATCH - DELETE
//GET - busca infos do back
//POST - cadastrar infos
//PUT -  atualizar infos de uma entidade (inteira)
//PATCH - atualizar uma info unica de uma entidade (info especifica)
//DELETE - deletar uma info
