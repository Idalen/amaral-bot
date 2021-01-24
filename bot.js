const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv/config');
const ytdl = require('ytdl-core');

const notBotChannel = require('./commands/notBotChannel');
const deleteMessages = require('./commands/deleteMessages');
const { link } = require('ffmpeg-static');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  notBotChannel(msg);
  deleteMessages(msg);

});


client.login(process.env.BOT_TOKEN);
