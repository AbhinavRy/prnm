const express = require("express");
const request = require("request-promise");
const cheerio = require("cheerio");
const WhichX  = require("whichx");
const whichpet = new WhichX();
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Schemes = require("./models/schemesModel");

const urlWithId = `https://services.india.gov.in/service/listing?cat_id=1&ln=en`;

const categories = ["education","health","finance","employment"];

whichpet.addLabels(categories);
whichpet.addData("education","education teach teaching teacher student school scholar scholars");
whichpet.addData("health","health medical medicine hospital healthcare disease medical treatment");
whichpet.addData("finance","payment tax education loan finance financial scholarship aid dhan bima mudra financial assistance");
whichpet.addData("employment","employment training employer skill skills employee employ ")

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
    
    async (req,res) => {
        const arrayOfSchemes = [];
        request(urlWithId, async(error, response, html) => {
    
            if(!error && response.statusCode==200) {
                const $= cheerio.load(html);
                const divs = $("div.edu-lern-con");
                for(let i = 0; i < divs.length; i++){
                    const divs_h3 = $(divs[i]).find("h3")[0]
                    const divs_a = $(divs[i]).find("a")[0]
                    if(divs_h3 && divs_a){
                        const name = $(divs_h3).text().trim();
                        const link = $(divs_a).attr("href").trim();
                        var schemeCategory = whichpet.classify(name);
                        schemeCategory = !schemeCategory?"No Category":schemeCategory;
                        arrayOfSchemes.push(name,link,schemeCategory);
                        try {
                            let existingScheme = await Schemes.find({name:name});
                            if(!existingScheme[0] && (name && link)){
                                scheme = new Schemes({
                                    name:name,
                                    link:link,
                                    category:schemeCategory
                                });
                                await scheme.save();
                            }
                        } catch (err) {        
                            console.error(err.message);
                        }
                        
                    }
                     
                }
                res.send(arrayOfSchemes); 
                console.log('Scraping Done...');
            }
        
        });
        // res.send(arrayOfSchemes);
        // if (!errors.isEmpty()) {
        // return res.status(400).json({ errors: errors.array() });
        // }

        // const { name, link } = req.body;

        // try {
        //     scheme = new Schemes({
        //         name,
        //         link
        //     });
        //     await scheme.save();
        //     res.json(scheme);
        // } catch (err) {        
        //     console.error(err.message);
        //     res.status(500).send('Server error');
        // }
    }
);

module.exports = router;
