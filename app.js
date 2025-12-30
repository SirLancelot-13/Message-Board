const express=require('express');
const app=express();
const indexRouter=require('./routers/indexRouter.js');
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({ extended: true }));
app.use('/',indexRouter);
const port=3000;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});