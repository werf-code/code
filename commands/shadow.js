module.exports = {
    name: 'banish',
    execute(message, args){
        if(message.guild.member(message.author).id !== '484644637420552202') {return message.reply("Incorrect userid.")}

        let realmlist = ['shadow', 'earth', 'sky', 'hell', 'heaven', 'ground']
  

        let mention = message.mentions.users.first();
        mention !== null
        console.log(mention)

        if(message.guild.member(mention).roles.cache.find(role => role.id === '727541187883565076')) {message.guild.member(mention).roles.remove(role => role.id === '727541187883565076')}

    }
}