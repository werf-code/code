module.exports = {
    name: 'banish',
    execute(message, args){
        if(!message.guild.member(message.author).roles.cache.find(r => r.id === '736370787547742229')){
            return message.reply("Insufficient permissions.")
        } 
        let realmlist = ['shadow', 'earth', 'sky', 'hell', 'heaven', 'ground']
        const realm = realmlist[Math.floor(Math.random() * realmlist.length)];


        let member = message.mentions.users.first();
        if(!member) {return message.channel.send("Invalid mention/no mention.")}


        if(realm === 'shadow'){
            message.guild.member(member).roles.set(['736358315143200857'])
        }


        if(realm === 'earth'){
            message.guild.member(member).roles.set(['736358307039543347'])
        }


        if(realm === 'sky'){
            message.guild.member(member).roles.set(['736358303868911686'])
        }


        if(realm === 'hell'){
            message.guild.member(member).roles.set(['736358303327846460'])
        }


        if(realm === 'heaven'){
            message.guild.member(member).roles.set(['735942535750352926'])
        }
        

        if(realm === 'ground'){
            message.guild.member(member).roles.set(['735942529257832558'])

        }

        message.channel.send("Success")
	  
    }
}