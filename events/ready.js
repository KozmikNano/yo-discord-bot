const { Events } = require('discord.js');
const figlet = require('figlet');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(c) {
		figlet(`${c.user.username} Discord Bot`, function(err, data) {
			if (err) {
				console.log('Something went wrong...');
				console.dir(err);
				return;
			}
			console.log(data);
		});
		console.log(`The bot has loaded successfully!\nAs of stating, the bot is in ${c.guilds.cache.size} guilds!`);

	},
};