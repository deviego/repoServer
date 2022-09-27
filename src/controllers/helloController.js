class HelloController {
    async index(req, res) {
       return res.json({hello:"beautiful world"})
    }
}

export default new HelloController();