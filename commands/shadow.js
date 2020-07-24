module.exports = {
    name: 'banish',
    execute(message, args){
        if(message.guild.member(message.author).id !== '484644637420552202') {return message.reply("Incorrect userid.")}

        let realmlist = ['shadow', 'earth', 'sky', 'hell', 'heaven', 'ground']
  

        let mention = message.mentions.users.first().catch(error => message.channel.send("Invalid mention"))
        mention !== null

    }
}