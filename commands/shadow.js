module.exports = {
    name: 'banish',
    execute(message, args){
        if(message.guild.member(message.author).id !== '484644637420552202') {return message.reply("Incorrect userid.")}

        let realmlist = ['shadow', 'earth', 'sky', 'hell', 'heaven', 'ground']
        const realm = realmlist[Math.floor(Math.random() * realmlist.length)];


        let member = message.mentions.users.first();
        if(!member) {return message.channel.send("Invalid mention/no mention.")}


        if(realm === 'shadow'){
            member.roles.set(['736358315143200857'])
        }


        if(realm === 'earth'){
            member.roles.set(['736358307039543347'])
        }


        if(realm === 'sky'){
            member.roles.set(['736358303868911686'])
        }


        if(realm === 'hell'){
            member.roles.set(['736358303327846460'])
        }


        if(realm === 'heaven'){
            member.roles.set(['735942535750352926'])
        }
        

        if(realm === 'ground'){
            member.roles.set(['735942529257832558'])

        }

        message.channel.send("Success")
      
    }
}