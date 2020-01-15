const {Router} = require('express')
const router = Router()

router.get('/getVerbs', (req, res) => {
    const condition = req.query.cut ? ' WHERE img IS NOT NULL AND example IS NOT NULL' : ''
    const sql = 'SELECT * FROM verbs' + condition
    db.query(sql, (err, result) => {
        if (err) console.log(err)
        res.send(result)
    })
})


router.get('/setUpend/:id', (req, res) => {
    const sql  = `UPDATE verbs SET upend = NOT upend WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
        if (err) console.log(err)
        res.send({message: 'ok'})
    })
})

module.exports = router