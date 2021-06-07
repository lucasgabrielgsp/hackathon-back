import { Router } from 'express';
import listRoutes from './listRoutes';
import userRoutes from './userRoutes'



const router = Router();

router.use('/user', userRoutes)
router.use('/list', listRoutes)

export default router; 