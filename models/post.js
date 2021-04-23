const mongoose = require('mongoose');

// HOW DATA IS FORMATTED IN MONGODB
const postSchema = mongoose.Schema({
    title : { 
                type : String,
                required : true
            },
    description : {
                type : String,
                required : true
    },
    date : {
                type : Date,
                default : Date.now
    }        
})

module.exports = mongoose.model('Posts',postSchema);