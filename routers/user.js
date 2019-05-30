const express = require('express');
const router = express.Router();
const {
    showCreateUser,
    checkIfEmailInUse,
    addUser,
    deleteOne
} = require('../controllers/user');

router.get("/", showCreateUser);
router.post("/check", checkIfEmailInUse);

router.route('/')
    .post(addUser)

router.route('/:id')
    // .get(getOne)
    .delete(deleteOne);

module.exports = router;