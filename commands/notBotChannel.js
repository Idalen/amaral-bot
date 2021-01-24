module.exports = (msg) => {
    if (msg.content.startsWith('-p') && msg.channel != 526457236873281546){
        msg.delete({timeout:1000})
        .then(msg => console.log(`Deleted message from ${msg.author.username} after 1 seconds`))
        .catch(console.error);
      }
};