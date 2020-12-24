// Extract the classes from the discord.js module
const { Client, Attachment } = require('discord,js');

// Create an instrance of a Discord client
const client = new Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on(`message`, msg => {
    if (msg.content.startWith(`r.cancel`)) {
        msg.reply(`Powered by node.js\nMade by M4ndu`);
    }
    
    if (msg.content === 'r.whoami') {
        // Send the user's avatar URL
        msg.reply(msg.author.avatarURL);
    }
});

client.login('NzkxNDc3NjA3NDQ3MTM0MjE4.X-Pu9g.7XHl7O3yPRvBi757SHBo_xcZUnU');