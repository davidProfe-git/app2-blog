import { Request, Response } from 'express';
import RecipeController from '../../src/controllers/recipeController';
import { mockRequest, mockResponse } from 'jest-mock-req-res';

describe('RecipeController', () => {
    let recipeController: RecipeController;

    beforeEach(() => {
        recipeController = new RecipeController();
    });

    describe('getAllRecipes', () => {
        it('should return a list of recipes', async () => {
            const req = mockRequest();
            const res = mockResponse();

            await recipeController.getAllRecipes(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(expect.any(Array));
        });
    });

    describe('getRecipeById', () => {
        it('should return a recipe by ID', async () => {
            const req = mockRequest({ params: { id: '1' } });
            const res = mockResponse();

            await recipeController.getRecipeById(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(expect.any(Object));
        });
    });

    describe('createRecipe', () => {
        it('should create a new recipe', async () => {
            const req = mockRequest({ body: { title: 'New Recipe', ingredients: 'Flour, Sugar', instructions: 'Mix and bake' } });
            const res = mockResponse();

            await recipeController.createRecipe(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(expect.any(Object));
        });
    });

    describe('updateRecipe', () => {
        it('should update an existing recipe', async () => {
            const req = mockRequest({ params: { id: '1' }, body: { title: 'Updated Recipe' } });
            const res = mockResponse();

            await recipeController.updateRecipe(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(expect.any(Object));
        });
    });

    describe('deleteRecipe', () => {
        it('should delete a recipe by ID', async () => {
            const req = mockRequest({ params: { id: '1' } });
            const res = mockResponse();

            await recipeController.deleteRecipe(req, res);

            expect(res.status).toHaveBeenCalledWith(204);
            expect(res.send).toHaveBeenCalled();
        });
    });
});