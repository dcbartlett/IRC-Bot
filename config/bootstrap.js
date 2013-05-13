// App bootstrap
// Code to run before launching the app
//
// Make sure you call cb() when you're finished.
module.exports.bootstrap = function (cb) {
	// Get the lib
	var irc = require("irc");
	var S = require('string');

	// Create the bot name
	var bot = new irc.Client(sails.config.bot.server, sails.config.bot.botName, sails.config.bot.options);

	//bot.addListener("join", function(channel, nick) {
	//	if (nick == sails.config.bot.botName) { return; }
	//	bot.say(nick, nick + ", We are in a hangout: https://plus.google.com/hangouts/_/34735cf19607bf9ae91aedfb02192d0e741b3370?gpsrc=selm0&utm_medium=embd&enfplm&utm_source=lmnavbr&utm_campaign=lrnmre&rtsl=1");
	//});

	bot.addListener("message", function(nick, to, text, messageob) {
		var message = S(messageob.args[1]);
		if (to == sails.config.bot.botName) {
			bot.say(nick, "I'm a bot; i probably won't be good for conversation.");
		}
		if (message.contains("where") && message.contains("get") && message.contains("sails")) {
			bot.say(to, nick + ", you can find Sails.JS at http://www.sailsjs.com/");
		}
	});

	cb();
};