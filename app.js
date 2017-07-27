var restify = require('restify');
var builder = require('botbuilder');
var http = require('http');

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('listening to %s', server.url);
});

var connector = new builder.ChatConnector({
    appId: 'YOUR_APP_ID',
    appPassword: 'YOUR_APP_PASSWORD'
});
var bot = new builder.UniversalBot(connector);


server.post('/api/messages', connector.listen());

bot.dialog('/', function (session, args) {
    session.send("Hi");
    console.log(session.message.text);
});