const Wine = require('../models/wine');

exports.wineController = {
    
    getWines(req, res) {
        if(req.query.manufactureID){
            Wine.find({manufactureID: req.query.manufactureID}).sort({id: -1})
                .then(docs => res.json(docs))
                .catch(err => console.log(err))
        }
        const filters = {}
        if (req.query.wineName)
            filters["wineName"] = req.query.wineName
        if (req.query.year)
            filters["year"] = req.query.year
        if (req.query.kind)
            filters["kind"] = req.query.kind
        if (req.query.color)
            filters["color"] = req.query.color
        if (req.query.winePrice)
            filters["winePrice"] = { $gt: req.query.winePrice }
        if (req.query.foodPairing)
            filters["foodPairing"] = req.query.foodPairing
        if (req.query.manufacture)
            filters["manufacture"] = req.query.manufacture
        if (req.query.manufactureID)
            filters["manufactureID"] = req.query.manufactureID
        if (req.query.clientID)
            filters["clientID"] = req.query.clientID

        Wine.find(filters)
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));

    },

    getWine(req, res) {
        Wine.findOne({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },


    async addWine(req, res) {
        const tmp = await Wine.findOne({}).sort({ id: -1 }).limit(1);
        let id = tmp.id
        const newWine = new Wine({
            "id": id + 1,
            "wineName": req.body.wineName,
            "year": req.body.year,
            "kind": req.body.kind,
            "color": req.body.color,
            "winePrice": req.body.winePrice,
            "foodPairing": req.body.foodPairing,
            "description": req.body.description,
            "manufactureID": req.body.manufactureID,
            "manufacture": req.body.manufacture,
            "winePic": req.body.winePic,
            "clientID": req.body.clientID,
        });

        newWine.save()
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },

    updateWine(req, res) {
        const { body } = req
        const wine = {};

        if (body.wineName != "" && body.wineName != null) {
            wine.wineName = body.wineName
        }
        if (body.year != "" && body.year != null) {
            wine.year = body.year
        }
        if (body.kind != "" && body.kind != null) {
            wine.kind = body.kind
        }
        if (body.color != "" && body.color != null) {
            wine.color = body.color
        }
        if (body.winePrice != "" && body.winePrice != null) {
            wine.winePrice = body.winePrice
        }
        if (body.foodPairing != "" && body.foodPairing != null) {
            wine.foodPairing = body.foodPairing
        }
        if (body.description != "" && body.description != null) {
            wine.description = body.description
        }
        if (body.manufacture != "" && body.manufacture != null) {
            wine.manufacture = body.manufacture
        }
        if (body.manufactureID != "" && body.manufactureID != null) {
            wine.manufactureID = body.manufactureID
        }
        if (body.clientID != "" && body.clientID != null) {
            wine.clientID = body.clientID
        }
        if (body.winePic != "" && body.winePic != null) {
            wine.winePic = body.winePic
        }

        Wine.updateOne({ id: parseInt(req.params.id) }, wine)
            .then(docs => res.json(docs))
            .catch(err => console.log(err))

    },

    deleteWine(req, res) {
        Wine.findOneAndDelete({ id: parseInt(req.params.id) })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    }
};


