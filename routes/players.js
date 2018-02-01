//import { request } from 'https';

const { Router } = require('express');
const pool = require('../db/index');
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
    const { firstname, lastname, email, username, googleid, administrator } = request.body;
        pool.query(
            'INSERT INTO player(firstname, lastname, email, username, password, administrator) VALUES($1, $2, $3, $4, $5, $6)',
            [firstname, lastname, email, username, googleid, administrator],
            (err, res) => {
                if (err) return next(err);
            }
        )
});

// router.put('/:id', (request, response, next) => {
//     const { id } = request.params;
//     const { firstname, lastname, email, username, googleid, teams, administrator } = request.body;
//     //const { firstname, lastname } = request.body;


//     pool.query(
//         'UPDATE players SET firstname=($2), lastname=($3), email=($4), username=($5), googleid=($6), teams=($7), administrator=($8) WHERE id=($1)',
//         //'UPDATE player SET firstname=($2), lastname=($3), WHERE id=($1)',
//         [id, firstname, lastname, email, username, googleid, teams, administrator],
//        // [id, firstname, lastname],
//         (err, res) => {
//             if(err) return next(err);
            
//             response.redirect('/');
//         }
//     )
// });


module.exports = router; 