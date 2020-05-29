const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./model');
const Secret = require('../config/secret')


const generateToken = (user) => {

    const payload = {
        subject: user.id,
        username: user.username
    }

    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, Secret.JWT_SECRET, options)
}


router.get('/', (req, res) => {
    Users
        .getUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ message: err });
        });
});


router.post('/register', (req, res) => {

    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 8);

    Users
        .addUser({ username, password: hash })
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json({ message: err });
        });
});

router.post('/login', (req, res) => {

    const { username, password } = req.body;
    console.log('we send it')
    Users
        .findByUser(username)
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user)
                res.status(200).json({ message: `Welcome ${username}`, token: token });
            } else {
                res.status(401).json({ message: 'Sorry you can\'t pass' });
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'You are not a member!', err })
        });
});

module.exports = router;