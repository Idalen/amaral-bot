module.exports = msg => {
    if(msg.content.startsWith('>github'))
        msg.reply('você pode contribuir com o bot em: https://github.com/Idalen/amaral-bot !');
}