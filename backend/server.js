import express from 'express';
import routes from './routes/routes.js'

const app=express();

// app.get('/',(req,res)=>{
//     res.send("Server started")

// })

app.use('/',routes);

const port=5000
app.listen(port,()=>{
    console.log(`Server has started on port: ${port}`)
});