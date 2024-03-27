import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import { connectDB } from './config/database.js';
dotenv.config();

const PORT = process.env.PORT || 5009;
const app = express();
connectDB()
// Allows use access to endpoints related to "/api/users"
app.use('/api/users', userRoutes);


// middlewares
app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))