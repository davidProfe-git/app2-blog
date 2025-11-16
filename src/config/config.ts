export const config = {
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME || 'cooking_recipes',
        user: process.env.DB_USER || 'user',
        password: process.env.DB_PASSWORD || 'password',
    },
    server: {
        port: process.env.PORT || 3000,
    },
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
    api: {
        version: '1.0',
    },
};