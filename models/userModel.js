import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }
});

const expenseSchema = new mongoose.Schema({
    // income or expense
    type:{
        type: String,
        required: true
    },
    date:{
        type: Number,
        required: true
    },
    // amount gained or lost
    amount:{
        type: Number,
        required: true
    },
    // where it went/came from (groceries or rent, or payday)
    category:{
        type: String,
        required: true
    },
    notes:{
        type: String,
        required: false
    }

},{ 
    timestamps: true,
});

export default mongoose.model("users", userSchema);