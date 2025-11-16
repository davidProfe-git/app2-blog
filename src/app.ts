import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { json, urlencoded } from 'body-parser';
import { connectDB } from './db/index';
import indexRoutes from './routes/index';
import recipeRoutes from './routes/recipes';
import authRoutes from './routes/auth';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));

// Routes
app.use('/', indexRoutes);
app.use('/recipes', recipeRoutes);
app.use('/auth', authRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});