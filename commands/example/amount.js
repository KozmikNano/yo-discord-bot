const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('amount')
		.setDescription('Replies with the amount of times somebody has said yo!')
        .addUserOption(option => option.setName('user').setDescription('The user to get the amount of times they have said yo!')),
	async execute(interaction) {
		const user = interaction.options.getUser('user') || interaction.user;
        // look at database.json and grab the yoCount for the user. If the user doesn't exist, set it to reeturn with a message
        const fs = require('fs');
        let database = {};
        try {
            database = JSON.parse(fs.readFileSync('./database.json'));
        }
        catch (err) {
            console.error('Failed to load database:', err);
        }
        if (!database[user.id]) {
            database[user.id] = {
                name: user.username,
                yoCount: 0,
            };
        }
        await interaction.reply(`${user.username} has said yo ${database[user.id].yoCount} times!`);

	},
};
