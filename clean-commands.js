// Call in the modules and config and load the commands
const { REST, Routes } = require('discord.js');
require('dotenv').config();
const rest = new REST({ version: '10' }).setToken((process.env.DISCORDTOKEN));

// For global commands remove them
rest.put(Routes.applicationCommands(process.env.BOTID), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);