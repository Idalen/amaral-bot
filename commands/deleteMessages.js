module.exports = (msg) => {
    if(msg.content.startsWith('>del')){
        msg.react('👍')
        .catch(console.error);
        
        let content = msg.content.split(' ');
        num = parseInt(content[1]);
    
        if(isNaN(num))
        {
          msg.reply(`perdão, mas "${content[1]}" não é um número.`);
        }
        else
        {
          msg.channel.messages.fetch({ limit:num })
          .then(messages => {
            for(m of messages){
              m[1].delete();
            }
          })
          .then(console.log(`Deleted ${num} messages from ${msg.channel.name} ordered by ${msg.author.username}`))
          .catch(console.error);   
        }
    }
}