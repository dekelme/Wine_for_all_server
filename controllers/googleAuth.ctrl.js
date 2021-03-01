const User = require('../models/user');
const { OAuth2Client } = require('google-auth-library');
// const { findOne } = require('../Models/user');
const client = new OAuth2Client(process.env.CLIENT_ID);
const { userController } = require('../controllers/user.ctrl');

getLogout = (req, res) => {
    res.clearCookie('user')
    res.clearCookie('connect.sid');
    res.send("logout");
}


const verify = async (token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    }).catch(err => console.log(err))

    return ticket.getPayload();
}

googleAuth = async (req, res, next) => {
    let token = req.body.token
    let payload = await verify(token)

    await User.findOne({ googleID: payload['sub'] }) 
        .then(docs => {
            if (docs) {
                res.cookie('user', docs)
                res.json(docs)
            } else {
                let user = {
                    googleId: payload['sub'],
                    firstName: payload['given_name'],
                    lastName: payload['family_name'],
                    email: payload['email'],
                    imageUrl: payload['picture'],
                }
                userController.addUser(user, req, res) 
            }
        })
        .catch(err => {
            console.log(err)
        })
}
module.exports = {
    googleAuth,
    getLogout
}