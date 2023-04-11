const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(c) {
        // Make sure to not run the code if the message is from a bot
		if (c.author.bot) return;
		if (c.content.toLowerCase() === 'yo') {
			c.reply('yo');
		}
	},
};