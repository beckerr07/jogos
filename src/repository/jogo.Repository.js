import { knex } from "../config/knex.js";

async getAll(){
    const jogos = await knex('jogo').select("*").returning("*");
    return jogos;
}

