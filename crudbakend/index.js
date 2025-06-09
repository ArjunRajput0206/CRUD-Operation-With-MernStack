const express = require("express");
const app = express();
const { FetchEmployee } = require("./apis/Fetchemployee");
require("dotenv").config();
const cors = require("cors");
const { DeleteEmployee } = require("./apis/Deleteemployee");
const { connectDb } = require("./db/connectDb");
const { AddEmployee } = require("./apis/Addemployee");
const { UpdateEmployee } = require("./apis/UpdateEmployee");

app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.status(200).json({
        success: true,
        message: "Server Started"});
});

app.get("/employee", FetchEmployee);
app.delete("/deleteemployee/:id", DeleteEmployee);
app.post("/addemployee", AddEmployee);
app.put("/updateemployee", UpdateEmployee);
connectDb();

app.listen(process.env.PORT)

