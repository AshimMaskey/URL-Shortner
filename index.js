const express=require('express');
const {restrictToLoggedinUserOnly, checkAuth}=require('./middlewares/auth');
const cookieParser=require('cookie-parser');

const {connectToDb}=require('./connect');
const URL=require('./models/url');
const path=require('path');

const urlRoute=require('./routes/url');
const indexRoute=require('./routes/index');
const staticRoute=require('./routes/staticRouter');
const userRoute=require('./routes/user');

const app=express();
const PORT=8001;

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());


//db connection
connectToDb('mongodb://127.0.0.1:27017/short-url')
.then(()=>console.log('db connected successfully'))
.catch((err)=>console.log('some error occured', err));

app.use('/url', restrictToLoggedinUserOnly, urlRoute);
app.use('/url', indexRoute);
app.use('/',checkAuth,staticRoute);
app.use("/user", userRoute);

app.listen(PORT, ()=> console.log(`Server started at port: ${PORT}`));