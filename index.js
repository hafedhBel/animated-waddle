import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>ahla b daglouch</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>97772722</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>Hafedh Ben Haj Ali </h1>");
});

app.listen(port, () => {
    console.log(`Hello World  my server has started on port ${port}`);
});