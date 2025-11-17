import { RecipeService } from '../../src/services/recipeService';
import { Recipe } from '../../src/models/recipe.model';

describe('RecipeService', () => {
    let recipeService: RecipeService;

    beforeEach(() => {
        recipeService = new RecipeService();
    });

    describe('getAllRecipes', () => {
        it('should return an array of recipes', async () => {
            const recipes = await recipeService.getAllRecipes();
            expect(Array.isArray(recipes)).toBe(true);
        });
    });

    describe('getRecipeById', () => {
        it('should return a recipe by ID', async () => {
            const recipeId = '1';
            const recipe = await recipeService.getRecipeById(recipeId);
            expect(recipe).toBeInstanceOf(Recipe);
            expect(recipe.id).toBe(recipeId);
        });

        it('should throw an error if recipe not found', async () => {
            await expect(recipeService.getRecipeById('999')).rejects.toThrow('Recipe not found');
        });
    });

    describe('createRecipe', () => {
        it('should create a new recipe', async () => {
            const newRecipeData = { title: 'Test Recipe', ingredients: 'Test Ingredients', instructions: 'Test Instructions' };
            const createdRecipe = await recipeService.createRecipe(newRecipeData);
            expect(createdRecipe).toHaveProperty('id');
            expect(createdRecipe.title).toBe(newRecipeData.title);
        });
    });

    describe('updateRecipe', () => {
        it('should update an existing recipe', async () => {
            const recipeId = '1';
            const updatedData = { title: 'Updated Recipe' };
            const updatedRecipe = await recipeService.updateRecipe(recipeId, updatedData);
            expect(updatedRecipe.title).toBe(updatedData.title);
        });

        it('should throw an error if recipe not found', async () => {
            await expect(recipeService.updateRecipe('999', {})).rejects.toThrow('Recipe not found');
        });
    });

    describe('deleteRecipe', () => {
        it('should delete a recipe by ID', async () => {
            const recipeId = '1';
            await recipeService.deleteRecipe(recipeId);
            await expect(recipeService.getRecipeById(recipeId)).rejects.toThrow('Recipe not found');
        });

        it('should throw an error if recipe not found', async () => {
            await expect(recipeService.deleteRecipe('999')).rejects.toThrow('Recipe not found');
        });
    });
});