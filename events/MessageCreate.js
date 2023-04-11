const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(c) {
        // Make sure to not run the code if the message is from a bot
		if (c.author.bot) return;

        // !Any code you want to run when a message is sent goes here!
	},
};