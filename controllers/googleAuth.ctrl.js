// const Client = require('../models/client');
// const ClientCtrl = require('./client.ctrl');
// const Manufacture = require('../models/manufacture');
// const ManufactureCtrl = require('./manufacture.ctrl');

// // const { OAuth2Client } = require('google-auth-library');
// // const client = new OAuth2Client(process.env.CLIENT_ID);

// getLogout = (req, res) => {
//     // res.clearCookie('user')
//     // res.clearCookie('connect.sid');
//     // res.send("logout");
// }
// // verify = async (token) => {
//     // const ticket = await client.verifyIdToken({
//     //     idToken: token,
//     //     audience: process.env.CLIENT_ID
//     // }).catch(err => console.log(err))
//     // return ticket.getPayload();
// // }
// googleAuth = async (req, res, next) => {
//     // let token = req.body.token
//     // let payload = await verify(token)

//     // await User.findOne({googleID: payload['sub']})
//     //     .then(docs => {
//     //         if (docs) {
//     //             // res.cookie('user', docs)
//     //             res.json(docs)
//     //         } else {
//     //             let user = {
//     //                 id: payload['sub'],
//     //                 FirstName: payload['given_name'],
//     //                 LastName: payload['family_name'],
//     //                 Email: payload['email'],
//     //                 ImageUrl: payload['picture'],
//     //             }
//     //             userDBController.addUser(user, req, res)
//     //         }
//     //     })
//     //     .catch(err => {
//     //         console.log(err)
//     // })
// }
// module.exports = {
//     googleAuth,
//     getLogout
// }