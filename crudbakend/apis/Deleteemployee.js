const { ObjectId } = require("mongodb");
const { connectDb } = require("../db/connectDb");

async function DeleteEmployee(req, res) {
    try{
        let { id } = req.params;
        let db = await connectDb();
        let collection = db.collection("employees");
        let deleteRes = await collection.deleteOne({ _id: new ObjectId(id) });

        if(deleteRes.acknowledged) {
            return res.status(200).json({
                success: true,
                message: "Data Deleted Successfully",
                deleteRes,
            });
        }

        return res.status(400).json({
            success:false,
            message: "Please check the request data and try again",
        })
    }catch(e){
        return res.status(500).json({
            success: false,
            message: "Internal Sever Error"
        });
    }
}

module.exports = {
    DeleteEmployee,
};