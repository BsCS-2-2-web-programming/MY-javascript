const express = require("express"); 
const app = express();
const port = 8080; 


function requestLogger(request, response, next) {
    console.log(`Request method: ${request.method}, URL: ${request.url}`);
    next(); //passing control to the next middleware /route handler
} 
app.use(requestLogger); //we then apply the middleware to all routes


app.get('/',(req,res)=>{
    res.send('Hello World!');
})


app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
}) 
