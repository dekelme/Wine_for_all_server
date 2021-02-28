const User = require('../models/user');


exports.userController = {

    getUsers(req, res) {
        User.find({})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },


    getUser(req, res) {
        User.findOne({ id: req.params.id })
            .then(docs => res.json(docs))
            .catch(err => console.log(err))
    },


    async addUser(user ,req, res) {
        const tmp = await User.findOne({}).sort({ id: -1 }).limit(1);
        let id = tmp.id;
        const newUser = new User({
            "id": id+1,
            "googleID": user.id,
            "firstName":  user.FirstName,
            "lastName" : user.LastName,
            "email": user.Email,
            "phone": null,
            "gender" : null,
            "dateOfBirth": null,
            "city": null,
            "street": null,
            "zip": null,
            "imageURL": user.ImageUrl,
            "founded": null,
            "isClient": false,
            "isManufacture": false

        });

        newUser.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },

  
    updateUser(req, res) {
        const { body } = req
        const user = {}
        // if (body.firstName != "" && body.firstName != null) {
        //     user.firstName = body.firstName
        // }
        // if (body.lastName != "" && body.lastName != null) {
        //     user.lastName = body.lastName
        // }
        // if (body.clientEmail != "" && body.clientEmail != null) {
        //     user.clientEmail = body.clientEmail
        // }

        if (body.phone != "" && body.phone != null) {
            user.phone = body.phone
        }
        if (body.gender != "" && body.gender != null) {
            user.gender = body.gender
        }
        if (body.dateOfBirth != "" && body.dateOfBirth != null) {
            user.dateOfBirth = body.dateOfBirth
        }
        if (body.city != "" && body.city != null) {
            user.city = body.city
        }
        if (body.street != "" && body.street != null) {
            user.street = body.street
        }
        if (body.zip != "" && body.zip != null) {
            user.zip = body.zip
        }
        if (body.founded != "" && body.founded != null) {
            user.founded = body.founded
        }
        if (body.isClient != "" && body.isClient != null) {
            user.isClient = body.isClient
        }
        if (body.isManufacture != "" && body.isManufacture != null) {
            user.isManufacture = body.isManufacture
        }

        User.updateOne({ id: parseInt(req.params.id) }, user)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },

    deleteUser(req, res) {
        User.findOneAndDelete({ googleID: req.params.id })
            .then(() => res.json({ googleID: `${req.params.id}` }))
            .catch(err => console.log(err))
    },

    userLogin(req, res, next) {
        passport.authenticate('local', (err, user, info) => {
            console.log("After passport.authenticate");
            if (err) next(new Error('AuthenticationError'), req, res);
            if (!user) {
                console.log("No user exist");
            }
            else {
              req.logIn(user, (err) => {
                if (err) console.log("ERROR!" , err);
                res.send("Successfully Authenticated");
              });
            }
          })(req, res, next);
    },

    userLogout(req, res) {
        req.logout();
        res.send({msg: "User logged-out"});
    },

    userRegister(req, res) {
        User.findOne({ username: req.body.username }, async (err, doc) => {
            if (err) throw err;
            if (doc) res.send({msg: "User Already Exists"});
            if (!doc) {
              const hashedPassword = await bcrypt.hash(req.body.password, 10);
              const obj = await new Promise((resolve, reject) => {
                const obj = User.findOne({}).sort({ _id: -1 }).limit(1)
                resolve(obj);
              });
            const newId = obj.id + 1;
              const newUser = new User({
                id: newId,
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword,
              });
              await newUser.save();
              res.send("User Created");
            }
          });
    }
};
