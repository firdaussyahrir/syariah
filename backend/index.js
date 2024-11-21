import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; 

const app = express();

app.listen(5001, () => console.log('Server up and running...'));
