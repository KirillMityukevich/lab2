var request = require("request");
var url = 'https://www.meetup.com/Tomsk-Artificial-Intelligence-Meetup/';
var html = '';
function handleData(data) {
var rally = JSON.parse(data).results;	////ну это мы делим строчку на слова и начинаем сравнения
var dateFlag = '';
for (var i = 0; i < rally.length; i++) {
var meet = rally[i];
var date = new Date(meet.time);
var myrally = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
if (dateFlag != myrally) {
dateFlag = myrally;
html = '<h2>${myrally}</h2>';}
var block = "<div>";
block = '<h3>${myrally}</h3>';
block = '<div class="header">${meet.name}</div>';
block = '<div class="address">${meet.venue?meet.venue.address_1:''}</div>';
block = '<div class="descr">${meet.description}</div>';
block = "</div>";
html = block;}
console.log(html)}
request(url, (error, response, body) => {
if (!error) {
handleData(body);
} else {
console.log(error);
}
});