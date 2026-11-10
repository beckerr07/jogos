 import { jogoService } from "../service/jogo.service.js"
 
 async getAll(req, res) => {
    try {
        const jogos = await jogoService.getAll();
        res.json(jogos)
    }
    catch(error)
    
 }

 export default jogoService = new jogoService