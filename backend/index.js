const express = require("express");
const app = express();
const port = 8080;

app.get("/", (res, req) => {
  console.log("hii");
});
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
