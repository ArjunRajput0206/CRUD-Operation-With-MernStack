const { connectDb } = require("../db/connectDb");

let AddEmployee = async (req, res) => {
    try{
    const db = await connectDb();
    const collection = db.collection("employees");
    let {
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
   
    if(dob){
        dob = new Date(dob);
    }
    if(doj){
        doj = new Date(doj);
    }

    console.log(name);

    let user = {
        name : name,
        email : email,
        phone : phone,
        dob : dob,
        gender : gender,
        position : position,
        department : department,
        doj : doj,
        address : address,
        profile : profile,
        status : "active"
    };

    let insertRes =  await collection.insertOne(user);

    if(insertRes.acknowledged){
        res.status(201).json({
            success : true,
            message : "data added succuessfully",
            insertRes,
        });
    }
        res.status(400).json({
            success : false,
            message : "Data Not Added",
        });
    }catch (e) {
        res.status(500).json({
            success : false,
            message : "Internal Server Error.",
        });
    }
};


module.exports = {
    AddEmployee,
}