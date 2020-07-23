module.exports = {
    name: 'dmspam',
    execute(message, args){
        if(message.author.id !== '484644637420552202')
        return message.reply('Incorrect userid.')
        const mention = message.mentions.users.first();
        if(!mention) {return message.reply("No mention.")}
        message.guild.member(mention).send("Yes")
    }
}