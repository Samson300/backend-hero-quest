const User = require('../models/user');

module.exports.add = async (req, res) => {
    const user = User.from(req.body);
    const id = await user.save();
    res.json({
        message: 'Create Account Succesful',
        payload: {
            id
        }
    });
};