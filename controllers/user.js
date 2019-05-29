const User = require('../models/user');

module.exports.create = async (req, res) => {
    const user = User.from(req.body);
    const id = await user.save();
    res.json({
        message: 'Create Account Succesful',
        payload: {
            id
        }
    });
};

module.exports.getOne = async (req, res) => {
    const { id } = req.params;
    const user = await User.getById(id);
    res.json({
        message: 'Success',
        payload: {
            user
        }
    })
};

module.exports.deleteOne = async (req, res) => {
    const { id } = req.params;
    const result = await User.delete(id);
    res.json({
        message: 'Success',
        payload: {
            id
        }
    });
};