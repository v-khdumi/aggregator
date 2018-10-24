const unirest = require('unirest');
const cheerio = require('cheerio');

unirest
    .get('https://ain.ua/2018/10/11/quizi-io-otvechajte-na-voprosy-i-poluchajte-voznagrazhdenie-v-kriptovalyute/')
    .end(function(response){
        const body = response.body;
        const $ = cheerio.load(body);
        const title = $('#post-content h1').text().trim();
        const postText = $('.post-lead-content').text().trim();
        console.log('request result _________' + title + '_______' + postText);
    });