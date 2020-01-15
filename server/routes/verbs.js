const {Router} = require('express')
const router = Router()

router.get('/getVerbs', (req, res) => {
    const sql = 'SELECT * FROM verbs'
    db.query(sql, (err, result) => {
        if (err) console.log(err)
        res.send(result)
    })
})

module.exports = router