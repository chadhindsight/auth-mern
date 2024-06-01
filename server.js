import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import { connectDB } from './config/database.js';
import cookieParser from "cookie-parser";

dotenv.config();

connectDB()
const PORT = process.env.PORT || 5005;
const app = express();
app.use(express.json());

// Allows us to send form data
app.use(express.urlencoded({ extended: true }));

// Allows access to endpoints related to "/api/users"
app.use('/api/users', userRoutes);


// middlewares
app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))