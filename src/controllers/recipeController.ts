export class RecipeController {
    constructor(private recipeService: any) {}

    async getAllRecipes(req: any, res: any) {
        try {
            const recipes = await this.recipeService.getAllRecipes();
            res.status(200).json(recipes);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving recipes' });
        }
    }

    async getRecipeById(req: any, res: any) {
        const { id } = req.params;
        try {
            const recipe = await this.recipeService.getRecipeById(id);
            if (!recipe) {
                return res.status(404).json({ message: 'Recipe not found' });
            }
            res.status(200).json(recipe);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving recipe' });
        }
    }

    async createRecipe(req: any, res: any) {
        try {
            const newRecipe = await this.recipeService.createRecipe(req.body);
            res.status(201).json(newRecipe);
        } catch (error) {
            res.status(400).json({ message: 'Error creating recipe' });
        }
    }

    async updateRecipe(req: any, res: any) {
        const { id } = req.params;
        try {
            const updatedRecipe = await this.recipeService.updateRecipe(id, req.body);
            if (!updatedRecipe) {
                return res.status(404).json({ message: 'Recipe not found' });
            }
            res.status(200).json(updatedRecipe);
        } catch (error) {
            res.status(400).json({ message: 'Error updating recipe' });
        }
    }

    async deleteRecipe(req: any, res: any) {
        const { id } = req.params;
        try {
            const deletedRecipe = await this.recipeService.deleteRecipe(id);
            if (!deletedRecipe) {
                return res.status(404).json({ message: 'Recipe not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting recipe' });
        }
    }
}