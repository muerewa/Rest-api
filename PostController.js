const c = require('config');
const Post = require('./post-schema')
const service = require('./service');

class PostController {
    async create(req,res) {  
        try{
            const post = await service.create(req.body)
            res.json(post)
            console.log("запрос отправен успешно")
        }catch(err) {
            res.send(`${err.name} в запросе на создание формы`)
        }

    }

    async getAll(req,res) {
        try {
            const allPosts = await service.getAll()
            res.json(allPosts)
        } catch(e) {
            res.status(500).json(e)
        }
    }
    async getOne(req,res) {
        try {
            const OnePost = await service.getOne(req.params.id)
            return res.json(OnePost)
        } catch(e) {
            res.status(500).json(e)
        }
    }
    async update(req,res) {
        try {
            const postt = await service.update(req.body)
            return res.json(postt)
        } catch(e) {
            res.status(500).json(e)
        }
    }
    async delete(req,res) {
        try {
            const OnePost = await service.delete(req.params.id)
            res.json(OnePost)
        } catch(e) {
            res.status(500).json(e)
        }
    }

}

module.exports = new PostController()