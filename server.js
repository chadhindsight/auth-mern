import express from 'express';
const PORT = 5001;

const app = express();

app.get('/', (req, res) => {
    res.send("Server is up and running!")
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))