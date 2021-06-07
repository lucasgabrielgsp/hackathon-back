import express from 'express';
import router from './server/routes/routes';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://lucas:436352@cluster0.xy3pn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})



const app = express();



app.use(express.json());
app.use(router);

app.listen(5000, () => console.log('The server is running!'));