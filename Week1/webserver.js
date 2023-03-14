const express = require("express");
const res = require("express/lib/response");
const app = express();
const addTwoNumber = (n1, n2) => {
    return n1 + n2;
}
app.get("/addTwoNumber", (req,res)=> {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = addTwoNumber(n1,n2);
    res.json({statuscocde:200, data: result});
})
console.log (addTwoNumber(19,12));
const port = 3040
app.listen(port,()=> {
    console.log("Hello I'm listening to port " + port)
})

/*
Once this code is ready, to test it:
in the terminal below in VS code type
node .\webserver.js (the file)
wait for the popup
open the browser and enter:
localhost:3040/addTwoNumber?n1=5&n2=5 
port is the right port
then enter n1 and n2
*/
