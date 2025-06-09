const { connectDb } = require("../db/connectDb");

let FetchEmployee = async (req, res) => {
    try{
        let db = await connectDb();  //connect with db
        let collections = db.collection("employees"); //select collection
        let fetchres = await collections.find().toArray(); //prepare query & execute it
        res.status(200).json({
            // send response to user
            sucesss: true,
            message : "Employees Retrive Successfully",
            employee: fetchres,
        });
    }catch (e) {
        res.status(500).json({
            sucesss: false,
            message: "Internal Server Error. Please try again later",
        });
    }
};

module.exports = { FetchEmployee };