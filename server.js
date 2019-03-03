const express = require("express");
const path = require("path");
const app = express();

app.set("port", process.env.PORT || 3003);

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "src/public/index.html"))
});

app.listen(app.get("port"), () => {
    console.log("static server running")
});