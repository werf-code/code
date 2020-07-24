module.exports = {
    name: 'banish',
    execute(message, args){
        if(message.guild.member(message.author).id !== '484644637420552202') {return message.reply("Incorrect userid.")}

        let realmlist = ['shadow', 'earth', 'sky', 'hell', 'heaven', 'ground']
  

        let mention = message.mentions.users.first();
        mention !== null
        console.log(mention)

        if(mention.roles.cache.has('727541187883565076')) {message.guild.member(mention).role.rem}

    }
}