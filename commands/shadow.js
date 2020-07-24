module.exports = {
    name: 'banish',
    execute(message, args){
        if(message.guild.member(message.author).id !== '484644637420552202') {return message.reply("Incorrect userid.")}

        let realmlist = ['shadow', 'earth', 'sky', 'hell', 'heaven', 'ground']
        const realm = realmlist[Math.floor(Math.random() * realmlist.length)];


        let member = message.mentions.users.first();
        if(!member) {return message.channel.send("Invalid mention/no mention.")}


        if(realm === 'shadow'){
            let role = message.guild.roles.cache.find(r => r.id === '736358315143200857')
            member.roles.set(role)
        }


        if(realm === 'earth'){
            let role = message.guild.roles.cache.find(r => r.id === '736358307039543347')
            member.roles.set(role)
        }


        if(realm === 'sky'){
            let role = message.guild.roles.cache.find(r => r.id === '736358303868911686')
            member.roles.set(role)
        }


        if(realm === 'hell'){
            let role = message.guild.roles.cache.find(r => r.id === '736358303327846460')
            member.roles.set(role)
        }


        if(realm === 'heaven'){
            let role = message.guild.roles.cache.find(r => r.id === '735942535750352926')
            member.roles.set(role)
        }
        

        if(realm === 'ground'){
            let role = message.guild.roles.cache.find(r => r.id === '735942529257832558')
            member.roles.set(role)

        }

        message.channel.send("Success")
      
    }
}