const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', async (req, res) => {
    res.render('index', { title: 'Voyager' })
})

module.exports = router
