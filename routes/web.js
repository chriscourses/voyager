const express = require('express')
const router = express.Router()
// const User = require('../models/User')

/* GET home page. */
router.get('/', async (req, res) => {
    // const user = await User.where('id', 1).fetch()
    // const username = user.get('username')

    res.render('index', { title: 'Voyager' })
})

module.exports = router
