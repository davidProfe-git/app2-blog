# Cooking Recipes Blog

Welcome to the Cooking Recipes Blog project! This application is designed to allow users to browse, create, edit, and manage cooking recipes. It follows the MVC (Model-View-Controller) architectural pattern, ensuring a clean separation of concerns.

## Features

- User registration and authentication
- CRUD operations for recipes
- Responsive design for a seamless user experience
- Error handling and input validation

## Project Structure

```
cooking-recipes-blog
├── src
│   ├── app.ts
│   ├── controllers
│   │   ├── recipeController.ts
│   │   ├── userController.ts
│   │   └── authController.ts
│   ├── models
│   │   ├── recipe.model.ts
│   │   └── user.model.ts
│   ├── views
│   │   ├── layouts
│   │   │   └── main.ejs
│   │   ├── partials
│   │   │   ├── header.ejs
│   │   │   └── footer.ejs
│   │   └── recipes
│   │       ├── index.ejs
│   │       ├── show.ejs
│   │       ├── edit.ejs
│   │       └── new.ejs
│   ├── routes
│   │   ├── index.ts
│   │   ├── recipes.ts
│   │   └── auth.ts
│   ├── services
│   │   ├── recipeService.ts
│   │   └── userService.ts
│   ├── middleware
│   │   ├── auth.ts
│   │   └── errorHandler.ts
│   ├── config
│   │   └── config.ts
│   ├── db
│   │   └── index.ts
│   ├── utils
│   │   ├── validators.ts
│   │   └── helpers.ts
│   └── types
│       └── index.ts
├── public
│   ├── css
│   │   └── styles.css
│   └── js
│       └── main.js
├── tests
│   ├── controllers
│   │   └── recipeController.test.ts
│   └── services
│       └── recipeService.test.ts
├── package.json
├── tsconfig.json
├── .env.example
├── .gitignore
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd cooking-recipes-blog
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up your environment variables by copying `.env.example` to `.env` and filling in the required values.

5. Start the application:
   ```
   npm start
   ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.