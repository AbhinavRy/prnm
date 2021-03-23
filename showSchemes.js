const request = require("request-promise");
const cheerio = require("cheerio");
const url = "https://financialservices.gov.in/new-initiatives/schemes";
const id = 1;
const pageNo = 2;
const urlWithPageNo = `https://services.india.gov.in/service/listing?cat_id=${id}&ln=en&page_no=${pageNo}`;
const urlWithId = `https://services.india.gov.in/service/listing?cat_id=${id}&ln=en`;
const Schemes = require("./models/schemesModel");

request(urlWithId, async(error, response, html) => {
    if(!error && response.statusCode==200) {
        const $= cheerio.load(html);
        const divs = $("div.edu-lern-con");
        for(let i = 0; i < divs.length; i++){
            const divs_h3 = $(divs[i]).find("h3")[0]
            const divs_a = $(divs[i]).find("a")[0]
            if(divs_h3 && divs_a){
                const name = $(divs_h3).text();
                const link = $(divs_a).attr("href");
                console.log(name);
                console.log(link);
                // try {
                    // if(name && link){
                    // scheme = new Schemes({
                    //     name:name,
                    //     link:link
                    // });
                    // scheme.save();}
                // } catch (err) {        
                //     console.error(err.message);
                // }
            }
             
        }
    }

});