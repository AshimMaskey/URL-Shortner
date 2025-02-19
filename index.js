const express=require('express');
const urlRoute=require('./routes/url');
const indexRoute=require('./routes/index');
const {connectToDb}=require('./connect');

const app=express();
const PORT=8001;

app.use(express.json());

//db connection
connectToDb('mongodb://127.0.0.1:27017/short-url')
.then(()=>console.log('db connected successfully'))
.catch((err)=>console.log('some error occured', err));

app.use('/url', urlRoute);
app.use('/', indexRoute);

app.listen(PORT, ()=> console.log(`Server started at port: ${PORT}`));