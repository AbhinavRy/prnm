const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Schemes = require("./models/schemesModel");

router.get("/",
    async (req,res) => {
        try {
            let schemes = await Schemes.find({});
            if(!schemes){
                return res.status(400).json({msg:'There are no items added by the logged in seller'});
            }
            res.json(schemes);    
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

router.post("/",
    [
        check('name', 'Name is required').not().isEmpty(),
        check('link', 'Link is required').not().isEmpty(),
    ],
    async (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

        const { name, link } = req.body;

        try {
            scheme = new Schemes({
                name,
                link
            });
            await scheme.save();
            res.json(scheme);
        } catch (err) {        
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;