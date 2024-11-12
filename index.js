const express = require("express");

const app = express();
const port = 3000;

app.get("/", (request, response) => {
    response.send('Express server');
});

app.listen(port, () => {
    console.log(`Express server at ${port}`);
});
