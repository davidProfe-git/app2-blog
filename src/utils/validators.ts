export function validateRecipeInput(data: any) {
    const errors: string[] = [];
    
    if (!data.title || typeof data.title !== 'string') {
        errors.push('Title is required and must be a string.');
    }
    
    if (!data.ingredients || !Array.isArray(data.ingredients)) {
        errors.push('Ingredients are required and must be an array.');
    }
    
    if (!data.instructions || typeof data.instructions !== 'string') {
        errors.push('Instructions are required and must be a string.');
    }
    
    return {
        isValid: errors.length === 0,
        errors
    };
}

export function validateUserInput(data: any) {
    const errors: string[] = [];
    
    if (!data.username || typeof data.username !== 'string') {
        errors.push('Username is required and must be a string.');
    }
    
    if (!data.password || typeof data.password !== 'string') {
        errors.push('Password is required and must be a string.');
    }
    
    if (data.password && data.password.length < 6) {
        errors.push('Password must be at least 6 characters long.');
    }
    
    return {
        isValid: errors.length === 0,
        errors
    };
}