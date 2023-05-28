const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(c) {
		// Make sure to not run the code if the message is from a bot
		if (c.author.bot) return;
		if (c.content.toLowerCase() === 'yo') {
			c.reply('yo');
		}
		const fs = require('fs');

		// Load the database from the JSON file
		let database = {};
		try {
			database = JSON.parse(fs.readFileSync('./database.json'));
		}
		catch (err) {
			console.error('Failed to load database:', err);
		}

		// Update the database with the new message
		const authorId = c.author.id;
		const authorName = c.author.username;
		if (!database[authorId]) {
			database[authorId] = {
				name: authorName,
				yoCount: 0,
			};
		}
		database[authorId].yoCount++;

		// Save the updated database to the JSON file
		fs.writeFile('database.json', JSON.stringify(database), (err) => {
			if (err) {
				console.error('Failed to save database:', err);
			}
		});
	},
};