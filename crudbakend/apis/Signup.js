const { connectdb } = require("../db/connectdb")
const { ObjectId, ReturnDocument } = require("mongodb");

let signup = async (req, res) => {

    let { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password) {
        return res.status(400).json({
            success: false,
            error: "Invalid request parameters.",
            message: "Bad request. Please check the request data and try again."
        });
    }

    try {
        
        let db = await connectdb();
        let collection = db.collection("users");
        let users = await collection.findOne({ email: email });
        
         

        if (users) {
            return res.status(400).json({
                success: false,
                error: "Invalid request parameters.",
                message: "Account already exists."
            });
        }
 
        let inserRes = await collection.insertOne({ name: name, email: email, phone: phone, password: password });

        if(!inserRes.acknowledged){
            return res.status(400).json({
              success: false,
              error: "Invalid request parameters.",
              message: "signup failed"
            });
        }else{
            return res.status(200).json({
              success: true,
              message: "Data retrieved successfully.",
              inserRes
            });
        }
    } catch {
        return res.status(500).json({
          success: false,
          error: "An unexpected error occurred on the server.",
          message: "Internal Server Error. Please try again later."
        });
    }
}

module.exports = {
    signup,
}