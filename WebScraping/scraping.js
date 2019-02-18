const fs = require('fs');
const fetch = require('node-fetch');
const request = require('request-promise');
const cheerio = require('cheerio');



async function Scraping(){ 
		var tab_url = [];
		await request('https://www.relaischateaux.com/fr/site-map/etablissements', (error, respons,html) => {
			const $ = cheerio.load(html);	
				$('#countryF',html).find("h3:contains('France')").parent().find(".listDiamond > li").each(function(index){
						const url = $(this).find("a").first()[0].attribs.href;
						tab_url.push(url);
						
					});				
					fs.writeFile('url_hotels.json', JSON.stringify(tab_url, null, 4), function(err){
				})
		});
		return tab_url;
}

Scraping();