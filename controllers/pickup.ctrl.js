const Pickup = require('../models/pickup');

exports.pickupController = {
    getPickups(req, res){
        Pickup.find({})
        .then(docs => { res.json(docs) })
        .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },


    getPickup(req, res){
        Pickup.findOne({ _id: req.params.id})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },


    createPickup(req, res){
        Pickup.findOne({}).sort({ _id: -1 }).limit(1);
        const newPickup = new Pickup({
            // "winesID": req.body.winesID,
            // "deliveryStage": req.body.deliveryStage,
            "pickupPrice": req.body.pickupPrice,
            "pickupDate": req.body.pickupDate,
            "pickupCode": req.body.pickupCode
        });
        newPickup.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },

    deletePickup(req, res){
        Pickup.deleteOne({ _id:req.params.id})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },

};
