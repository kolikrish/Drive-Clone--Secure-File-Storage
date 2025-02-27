const express = require('express')
const app = express()
const indexRouter = require('./routes/index.routes')
const userRouter = require('./routes/user.routes');
const dotenv = require('dotenv');

dotenv.config();
const connectDB = require('./config/db');
connectDB();
const cookieParser = require('cookie-parser');

app.set("view engine",'ejs');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/',indexRouter);
app.use('/user',userRouter);

app.listen(3000);

