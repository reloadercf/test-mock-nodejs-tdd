let handlers = ({ axios }) => ({
    get: async(req, res) => {
        let { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
        res.status(200).send(data)
    },
    post: async(req, res) => {
        let { body } = req
        let { data } = await axios.post('https://jsonplaceholder.typicode.com/users', body)
        res.status(201).send(data)
    },
    put: async(req, res) => {
        let { body } = req
        let { id } = req.params
        await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body)
        res.sendStatus(204)
    },
    delete: async(req, res) => {
        let { id } = req.params
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        res.sendStatus(204)
    }
})
module.exports = handlers