import { Request, Response } from 'express';
import User from '../models/userSchema';

class UserController {
    async createUser(req: Request, res: Response) {
        try {
            await User.create(req.body);
            res.status(200).send({ message: 'Usuário criado com sucessso' })
        } catch (error) {
            res.status(400).send({ error: "Erro ao criar usuário" })
        }
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            const response = await User.find();
            res.status(200).send({ response })
            if(response == []){
                res.status(400).send({error:"nenhum usuário existente"})
            }
        } catch (error) {
            res.status(400).send({ error: "Erro ao ler todos os usuários" })
        }
    }

    async getOneUser(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const response = await User.findById(id);
            res.status(200).send({ response })
        } catch (error) {
            res.status(400).send({ error: "Erro ao ler usuário" })
        }
    }

    async updateUser(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const findUser = await User.findById(id);
            if (!findUser) {
                res.status(400).send({ error: "Usuário não encontrado" })
            }
            await findUser.updateOne(req.body);
            res.status(200).send({ messange: "Atualização de usuário feita com sucesso!" })

        } catch (error) {
            res.status(400).send({ error: "Erro ao atualizar usuário" })
        }
    }

    async deleteUser(req: Request, res: Response) {
        const id = req.params.id;
        try {
            await User.findByIdAndDelete(id)
            res.status(200).send({ message: "Usuário deletado com sucesso" })
            if(!id){
                res.status(400).send({error:"Usuário já deletado"})
            }
        } catch (error) {
            res.status(400).send({ error: "Erro ao deletar usuário" })
        }
    }
}


export default UserController;