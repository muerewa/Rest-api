const Post = require('./post-schema')

class Servise {
    
    async create(post) {  
        const createdPost = await Post.create(post)
        return createdPost
    }

    async getAll() {
        const allPosts = await Post.find();
        return (allPosts)
    }
    async getOne(id) {
            if(!id){
                throw new Error('Не указан id')
            }
            const OnePost = await Post.findById(id)
            return OnePost
    }
    async update(post) {
        if(!post._id){
            throw new Error('Не указан id')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost;
    }
    async delete(id) {
        if(!id){
            throw new Error('Не указан id')
        }
        const OnePost = await Post.findByIdAndDelete(id)
        return OnePost
    }
}

module.exports = new Servise()