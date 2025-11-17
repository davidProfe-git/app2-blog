import { Router } from 'express';
import RecipeController from '../controllers/recipeController';

const router = Router();
const recipeController = new RecipeController();

router.get('/', recipeController.getAllRecipes.bind(recipeController));
router.get('/:id', recipeController.getRecipeById.bind(recipeController));
router.post('/', recipeController.createRecipe.bind(recipeController));
router.put('/:id', recipeController.updateRecipe.bind(recipeController));
router.delete('/:id', recipeController.deleteRecipe.bind(recipeController));

export default router;