import express from 'express';
import userRoutes from './routes/userRoutes';

const PORT = process.env.PORT || 5001;

const app = express();

// Allows use access to endpoints related to "/api/users"
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send("Server is up and running!")
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))