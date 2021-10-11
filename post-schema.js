const mongoose = require('mongoose')

const Post = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}, 
    category: {type: String, required: true},  
    podcategory: {type: String, required: true},  
    type: {type: String, required: true},
    picture: {type: String, required: true},      
})

const model = mongoose.model('Post', Post)
module.exports = model