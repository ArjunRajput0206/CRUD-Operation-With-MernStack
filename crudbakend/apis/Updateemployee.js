const { ObjectId } = require("mongodb");
const { connectDb } = require("../db/connectDb")

let UpdateEmployee = async (req,res) => {
    try{
        let db = await connectDb();
        let collection = db.collection("employees");
        let {
            _id,
            name,
            email,
            phone,
            dob,
            gender,
            position,
            department,
            doj,
            address,
            profile,
        } = req.body;

        let employee = await collection.findOne({_id: new ObjectId(_id)});

        if(!employee) {
            res.status(400).json({
              success: false,
              message: "No user found."
            });
        }

        let updateObj = {
            name: name || employee.name,
            email: email || employee.email,
            phone :phone || employee.phone,
            dob :dob ? new Date(dob) : employee.dob,
            gender:gender || employee.gender,
            position:position || employee.position,
            department:department || employee.department,
            doj :doj ? new Date(doj) : employee.doj,
            address:address || employee.address,
            profile:profile || employee.profile,
    };

    let updateRes = await collection.updateOne(
        {_id: new ObjectId(_id)},
        { $set: updateObj }
    );

    if(updateRes.acknowledged) {
        res.status(200).json({
            success: true,
            message: "Data Updated Successfully",
            updateRes,
        });
    }

    }catch(e){
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

module.exports = {
    UpdateEmployee,
}
