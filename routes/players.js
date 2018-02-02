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
            'INSERT INTO player(firstname, lastname, email, username, googleid, administrator) VALUES($1, $2, $3, $4, $5, $6)',
            [firstname, lastname, email, username, googleid, administrator],
            (err, res) => {
                if (err) return next(err);
            }
        )
});

router.put('/:id', (request, response, next) => {
    const { id } = request.params;
    const { firstname, lastname, email, username, googleid, teams, administrator } = request.body;
    const keys = ['firstname', 'lastname', 'email', 'username', 'googleid', 'teams', 'administrator']
    const fields = [];

    keys.forEach(key => {
        if (request.body[key]) fields.push(key)
    });

    fields.forEach((field, index) => {
        pool.query(
            `UPDATE player SET ${field}=($1) WHERE id=($2)`,
           
            [request.body[field],id],
           
            (err, res) => {
                if(err) return next(err);
                
                if(index === fields.length - 1) response.redirect('/');
            }
        )
    });

   
});

router.delete('/:id', (request, response, next) => {
    const { id } = request.params;

    pool.query(
        `DELETE FROM player WHERE id=($1)`, [id], (err, res) => {
            if (err) return next(err);
            response.redirect('/')
        }
    )
});

module.exports = router; 