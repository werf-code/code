module.exports = {
    name: 'banish',
    execute(message, args){
        if(message.guild.member(message.author).id !== '484644637420552202') {return message.reply("Incorrect userid.")}

        let realmlist = ['shadow']
        const realm = realmlist[Math.floor(Math.random() * realmlist.length)];
        if(realm === 'shadow'){
            message.channel.send("test")
        }
/*
        let role = message.guild.roles.cache.find(r => r.id === "727541187883565076");
        let member = message.mentions.members.first();
        member.roles.remove(role)
*/

      
    }
}