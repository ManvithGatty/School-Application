import express from 'express';
import cors from 'cors';
import path from "path";
import { fileURLToPath } from "url";
import schoolRoutes from './schoolRoutes.js';

const PORT = 5000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Server setup
app.listen(PORT,function(){
    console.log(`Server running in http://localhost:${PORT}`);
})

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/images", express.static(path.join(__dirname, "Images")));
app.use("/api/schools", schoolRoutes);