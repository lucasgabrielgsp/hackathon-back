import {Router} from 'express';
import ListController from '../controllers/listController';

const postRoutes = Router();
const listController = new ListController();


postRoutes.post('/', listController.createList)
postRoutes.get('/one/:id', listController.getOneList)
postRoutes.get('/all', listController.getAllLists)
postRoutes.put('/:id', listController.updateList)
postRoutes.delete('/:id', listController.deleteList)


export default postRoutes;
