const { Router } = require('express');
const pool = require('../db/index.js');
const router = Router();

router.get('/', (request, response, next) => {
    pool.query('SELECT * FROM player', (err, res) => {
        if (err) return next(err);
        response.json(res.rows);
     });
});


router.get('/:id', (request, response, next) => {
    const { id } = request.params;
    pool.query('SELECT * FROM player WHERE id = $1', [id], (err, res) => {
        if (err) return next(err);
        response.json(res.rows);
     });
});

router.post('/', (request, response, next) =>{
    const { firstname, lastname, email, username, password, administrator } = request.body;
        pool.query(
            'INSERT INTO player(firstname, lastname, email, username, password, administrator) VALUES($1, $2, $3, $4, $5, $6)',
            [firstname, lastname, email, username, password, administrator],
            (err, res) => {
                if (err) return next(err);
            }
        )
});


module.exports = router;