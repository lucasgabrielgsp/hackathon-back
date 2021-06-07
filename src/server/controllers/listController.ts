import { Request, Response} from 'express';
import List from '../models/listSchema';


class PostController {
    async createList(req: Request, res: Response) {
        const {title, username} = req.body;
        try {
            
            const checkList = await List.findOne({title, username});
            if(checkList){
                return res.status(400).send({ error: "Lista já existente" });
            }

            const newList = await List.create({
                "title":title,
                "username":username,
                "itens":[],
            })

            return res.status(200).send(newList);

        } catch (error) {
            res.status(400).send({error:"Erro ao criar lista"})
        }
    }

    async getOneList(req: Request, res: Response) {
        const {id} = req.params
        try {
            const response = await List.findById(id);
            res.status(200).send({response})
            if (!response) {
                res.status(400).send({ error: "Falha ao encontrar lista do usuário" })
            }
        } catch (error) {
            res.status(400).send({ error: "Falha ao procurar lista" })
        }
    }
    async getAllLists(req: Request, res: Response) {
        try {
            const response = await List.find();
            res.status(200).send({ response });
        } catch (error) {
            res.status(400).send({ error: "Falha ao buscar todos as listas" })
        }
    }
    async updateList(req: Request, res: Response) {
        const { title, username, content } = req.body;
        try {
            const addItens:any = await List.findOne(
                {
                    title,
                    username,
                });

            if (!addItens) {
                res.status(400).send({ erro: "Listas inexistente" });
            }

            const itens = [...addItens.itens , { content: content }];

            const updatedList = await addItens.updateOne({ itens: itens });

            return res.status(200).send({ updatedList });
        } catch (err) {
            res.status(400).send({ erro: err.message });
        }

    }

    async deleteList(req: Request, res: Response) {
        const id = req.params.id
        try {
            const userList = await List.findById(id)
            if (!userList) {
                res.status(400).send({ error: "Lista não encontrada" })
            }
            await userList.deleteOne(req.body)
            res.status(200).send({ message: "Lista deletado com sucesso!" })
        } catch (error) {
            res.status(400).send({ error: "Falha ao deletar lista" })
        }
    }
}

export default PostController;
