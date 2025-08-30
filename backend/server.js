import express from 'express';
import cors from 'cors';

const PORT = 5000;

// Server setup
const app = express();
app.listen(PORT,function(){
    console.log(`Server running in http://localhost:${PORT}`);
})

// Middleware
app.use(cors());
app.use(express.json());