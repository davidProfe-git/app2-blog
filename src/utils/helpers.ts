export const formatRecipeData = (recipe) => {
    return {
        id: recipe.id,
        title: recipe.title,
        ingredients: recipe.ingredients.join(', '),
        instructions: recipe.instructions,
        createdAt: recipe.createdAt.toLocaleDateString(),
        updatedAt: recipe.updatedAt.toLocaleDateString(),
    };
};

export const calculateCookingTime = (ingredients) => {
    const baseTime = 10; // base time in minutes
    const additionalTimePerIngredient = 5; // additional time per ingredient in minutes
    return baseTime + (ingredients.length * additionalTimePerIngredient);
};