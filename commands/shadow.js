module.exports = {
    name: 'banish',
    execute(message, args){
        if(message.guild.member(message.author).id !== '484644637420552202') {return message.reply("Incorrect userid.")}

        let realmlist = ['shadow', 'earth', 'sky', 'hell', 'heaven', 'ground']
  

        let mention = message.mentions.users.first();
        mention !== null
        console.log(mention)

        const role1 = message.guild.member(mention).roles.cache.find(role.id === '727541500703145994')
        const role2 = message.guild.member(mention).roles.cache.find(role.id === '727541187883565076')
        if(!role1 | !role2) {console.log("Incompatible user."); return message.reply("Incompatible user.")}
        message.channel.send("dir.suh")

    }
}