import express from 'express';

const PORT = 5000;

const app = express();

app.listen(PORT,function(){
    console.log(`Server running in http://localhost:${PORT}`);
})