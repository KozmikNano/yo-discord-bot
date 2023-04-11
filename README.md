# discord-js-template
A discord.js bot template to help people starting out fresh on their projects!


## About
This is a simple backbone for creating a discord bot in Javascript. You can fork as a template and do as you see fit. I will put more info about setting it up bellow. Enjoy and stay creative!

## Usage
When starting out with the bot you will want to give it some basic info like your bot token and client id (aka bot id.) You can find out some more info about obtaining these [here.](https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-bot-s-token)


### Setting up env variables
When you fork the repo create a file called `.env` and put whats below into it. Don't forget to add what your details making sure not to leave a space.
```
DISCORDTOKEN=
BOTID=
```
- `DISCORDTOKEN` is the token your bot has. You got this by following the guide linked [here.](https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-bot-s-token)
- `BOTID` is the user id of the discord bot. This is obtained within a discord client. Here is a [guide from discord.](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)

### Installing the libraries
While you are at it you can install the required libraries by running this command inside the root folder of this repo in your terminal: `npm install`

### Adding Commands
You can add commands easily within the `commands` folder. The base loader will look inside subfolder in that folder. This is great because it can help keep all of your sweet commands organized. Here is a example of the file structure:

![A image showing a command inside of a subfolder of the commands folder](https://github.com/KozmikNano/discord-js-template/raw/main/pictures/commands-folder.png)

### Handling Sent Messages (and any other event!)
In this setup all of the different events are handled by their own file. Open the `events` folder to edit what happens when the bot is ready (`ready.js`), a command is ran (`InteractionCreate.js`), and when a message is sent in the server (`MessageCreate.js`)

### Controlling the CLI (Terminal)
There are two main commands built in that you may use!
- `npm start` This will start your bot and send the list of useable commands to discord
- `npm run clean` This will tell discord to remove all of the commands from the bot!


## Ending Notes
This bot is free to use by anyone, if you have any questions or concerns feel free to open a issue! Contributions are also welcome anytime from anyone. Have fun and no matter what, don't let anyone stop you from coding your dreams!

If you want a comprehensive guide/documentation on everything discord bot making related, look here: https://discord.js.org
