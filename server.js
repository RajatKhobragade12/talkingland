const express = require('express');
const mongoose = require('mongoose');
const router = require("./src/routes/routes");
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://avenger:rajatrajat12@cluster0.wuyw0.mongodb.net/talkingLand')

app.use("/", router);


app.listen(3000, () => {
    console.log('server is running on port 3000')
});
