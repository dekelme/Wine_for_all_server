const Shipping = require('../models/shipping');

exports.shippingController = {
    getShippings(req, res){
        const filters = {}
        if(req.require.clientID)
            filters["clientID"] = req.require.clientID
        if(req.require.manufactureID)
            filters["manufactureID"] = req.require.clientID
        Shipping.find(filters)
        .then(docs => { res.json(docs) })
        .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },


    getShipping(req, res){
        Shipping.findOne({ id: parseInt(req.params.id)})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },


    async addShipping(req, res){
        const tmp = await Shipping.findOne({}).sort({ id: -1 }).limit(1);
        let id = tmp.id;
        const newShipping = new Shipping({
            "id": id+1,
            "winesID": req.body.winesID,
            "orderPrice": req.body.orderPrice,
            "orderDate": req.body.orderDate,
            "trackingNumber": req.body.trackingNumber,
            "shippingAddress": req.body.shippingAddress,
            "shippingPrice": req.body.shippingPrice,
            "manufactureID": req.body.manufactureID,
            "clientID": req.body.clientID
        });
        newShipping.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },

    updateShipping(req, res) {
        Shipping.updateOne({ id: parseInt(req.params.id) }, req.body)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },

    deleteShipping(req, res){
        Shipping.findOneAndDelete({ id: parseInt(req.params.id)})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },

};
