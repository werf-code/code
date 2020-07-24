module.exports = {
    name: 'banish',
    execute(message, args){
        if(message.guild.member(message.author).id !== '484644637420552202') {return message.reply("Incorrect userid.")}

        let realmlist = ['shadow', 'earth', 'sky', 'hell', 'heaven', 'ground']
        const realm = realmlist[Math.floor(Math.random() * realmlist.length)];


        let member = message.mentions.users.first();
        if(!member) {return message.channel.send("Invalid mention/no mention.")}

        let mainrole = message.guild.roles.cache.find(r => r.id === "727541187883565076");
        member.roles.remove(mainrole)



        if(realm === 'shadow'){
            let role = message.guild.roles.cache.find(r => r.id === '123')
            member.roles.add(role)
        }


        if(realm === 'earth'){
            let role = message.guild.roles.cache.find(r => r.id === '123')
            member.roles.add(role)
        }


        if(realm === 'sky'){
            let role = message.guild.roles.cache.find(r => r.id === '123')
            member.roles.add(role)
        }


        if(realm === 'hell'){
            let role = message.guild.roles.cache.find(r => r.id === '123')
            member.roles.add(role)
        }


        if(realm === 'heaven'){
            let role = message.guild.roles.cache.find(r => r.id === '123')
            member.roles.add(role)
        }
        

        if(realm === 'ground'){
            let role = message.guild.roles.cache.find(r => r.id === '123')
            member.roles.add(role)
        }
      
    }
}