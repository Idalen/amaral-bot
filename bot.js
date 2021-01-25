const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv/config');

const notBotChannel = require('./commands/notBotChannel');
const deleteMessages = require('./commands/deleteMessages');
const github = require('./commands/github');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  notBotChannel(msg);
  deleteMessages(msg);
  github(msg);
  

});

client.on('messageUpdate', (oldMessage, newMessage) =>{
  
  newMessage.reply(`${oldMessage.content} rs`)
  .then(console.log(`Message edited by ${newMessage.author.username} in ${newMessage.channel.name}`))
  .catch(console.error);
  
})


client.login(process.env.BOT_TOKEN);
