const linkRouter = require('express').Router()
const Link = require('../models/link')

linkRouter.get('/', async (req, res) => {
    const links = await Link.find({})
    res.json(links.map(link => link.toJSON()))
})

linkRouter.post('/', (req, res) => {
    const body = req.body
    const link = new Link({
        url: body.url,
        created: new Date()
    })
    link.save()
        .then(savedLink => {
            res.json(savedLink.toJSON())
        })
})

linkRouter.get('/:id', async (req, res) => {
    const link = await Link.findById(req.params.id)
    res.json(link.toJSON())
})

linkRouter.delete('/:id', async (req, res) => {
    await Link.findByIdAndRemove(req.params.id)
    res.status(204).end()
})

module.exports = linkRouter