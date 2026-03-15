const express = require("express");
const app = express();
const port = 8080;

app.get("/getquiz", (res, req) => {
  console.log("hii");
});


app.post("/addpost",(res,req)=>{
  
})
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
