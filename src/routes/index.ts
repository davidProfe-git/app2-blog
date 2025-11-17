import { Router } from 'express';
import recipeRoutes from './recipes';
import authRoutes from './auth';

const router = Router();

router.use('/recipes', recipeRoutes);
router.use('/auth', authRoutes);

export default router;