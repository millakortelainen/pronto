const linkRouter = require('express').Router()
const Link = require('../models/link')

linkRouter.get('/', (req, res) => {
    Link.find({}).then(links => {
        res.json(links.map(link => link.toJSON()))
    })
})

linkRouter.post('/', (req, res) => {
    const body = req.body
    const link = new Link({
        link: body.link,
        added: new Date()
    })
    link.save()
        .then(savedLink => {
            res.json(savedLink.toJSON())
        })
})

module.exports = linkRouter