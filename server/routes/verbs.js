const {Router} = require('express')
const router = Router()

router.get('/getVerbsList', (req, res) => {
    const sql = 'SELECT translate, infinitive, past_simple, past_participle FROM verbs'
    db.query(sql, (err, result) => {
        if (err) console.log(err)
        res.send(result)
    })
})

router.get('/getTestVerbs', (req, res) => {
    const amount = req.query.amount
    const sql = `SELECT * FROM verbs as t,
    (SELECT DISTINCT ROUND((SELECT MAX(id) FROM verbs) *rand()) as rnd FROM verbs LIMIT ${+amount}) tmp
    WHERE t.id in (rnd)`
    db.query(sql, (err, result) => {
        if (err) console.log(err)
        res.send(result)
    })
})

router.get('/getVerbsStudy', (req, res) => {
    const sql = 'SELECT * FROM verbs WHERE img IS NOT NULL AND example IS NOT NULL'
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