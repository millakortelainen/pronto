const linkRouter = require('express').Router()
const Link = require('../models/link')

linkRouter.get('/', async (req, res) => {
    const links = await Link.find({})
    res.json(links.map(link => link.toJSON()))
})

linkRouter.post('/', (req, res) => {
    console.log(req.body)
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

module.exports = linkRouter