import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("ahla b daglouch");
});

app.listen(port, () => {
    console.log(`Hello World  my server has started on port ${port}`);
});