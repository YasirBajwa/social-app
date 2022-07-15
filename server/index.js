import express from 'express';
import bodyParser from 'bodyParser';
import mongoose from 'mongoose';
import cors from 'corse';



const app = express();

app.use(bodyParser.json({ limit:'30mb', extended:true }));
app.use(bodyParser.urlencoded({ limit:'30mb', extended:true }));
app.use(cors());


