const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const UserRouter=require('./routes/UserRoute.js');
const DocsRouter=require('./controllers/DocsController.js')
const bodyParser=require('body-parser');
const app = express();
const connectDB = require('./config/db.js');
connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send('Home page')
})
app.use('/',UserRouter)
app.use('/',DocsRouter)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
