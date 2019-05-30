const User = require('../models/user');
const escapeHtml = require("../utils");

async function showCreateUser(req, res) {
    res.render("createUser", {
    locals: {
        message: "Please fill in the below details to create an account.",
        firstName: "",
        lastName:"",
        email: "",
        password:"",
        confirmPassword:""
    }
    });
}

async function addUser(req, res) {
    console.log('addUser is getting called')
    const newUser = await User.add(req.body);
    res.json(newUser)
    
    
}

async function checkIfEmailInUse(req, res) {
    let theUserData = req.body;
    console.log(req.body.email);
    let theEmail = escapeHtml(req.body.email);
    const emailTaken = await User.checkEmail(theEmail);

    if (emailTaken === theUserData) {
        await User.add(req.body);
        res.redirect('login');
    } else {
        res.json({
            message: "Email address already registered, please use a different email or log in with your password at the login page",
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:""
        })
    }
}

async function deleteOne(req, res) {
    const { id } = req.params;
    const result = await User.delete(id);
    res.json({
        message: 'Success',
        payload: {
            id
        }
    });
};

module.exports = {
    showCreateUser,
    checkIfEmailInUse,
    addUser,
    deleteOne
};




// module.exports.createUser = async (req, res) => {
//     const user = User.from(req.body);
//     const id = await user.add();
//     res.json({
//         message: 'Create Account Succesful',
//         payload: {
//             id
//         }
//     });
// };

// module.exports.getOne = async (req, res) => {
//     const { id } = req.params;
//     const user = await User.getById(id);
//     res.json({
//         message: 'Success',
//         payload: {
//             user
//         }
//     })
// };

// module.exports.deleteOne = async (req, res) => {
//     const { id } = req.params;
//     const result = await User.delete(id);
//     res.json({
//         message: 'Success',
//         payload: {
//             id
//         }
//     });
// };