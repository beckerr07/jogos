import { jogoRepository } from "../repository/jogo.Repository.js";

async getAll() {
    const jogo = await jogoRepository.getAll();
    return jogo
}

async getById(){
    const jogo = await jogoRepository.getById
    return jogo
}