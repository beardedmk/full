const db = require('mongoose')

const userSchema = new db.Schema(
    {
        email:String,
        password:String,
        name:String
    }
);
module.exports  = db.model("user",userSchema);