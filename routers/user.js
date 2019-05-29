const express = require('express');
const router = express.Router();
const {
    create,
    getOne,
    deleteOne
} = require('../controllers/user');

router.route('/')
    .user(create)

router.route('/:id')
    .get(getOne)
    .delete(deleteOne);

module.exports = router;