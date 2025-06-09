const { MongoClient } = require("mongodb");
require("dotenv").config()

let connectDb = async (req, res) => {
    let url = process.env.URL;
    const client = await MongoClient.connect(url);
    const db = client.db("infolabz");
    return db;
};

module.exports = {
    connectDb,
};