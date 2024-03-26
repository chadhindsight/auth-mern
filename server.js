import express from 'express';
import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

const PORT = process.env.PORT || 5001;

const app = express();

// Allows use access to endpoints related to "/api/users"
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send("Server is up and running!")
})
// middlewares
app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))