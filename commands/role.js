module.exports = {
    name: 'role',
    execute(message,args){
        if(!message.guild.member(message.author).hasPermission(['ADMINISTRATOR'])) {return message.channel.send("Insufficient permissions.")}


        let member = message.mentions.users.first()
        if(!member) {return message.channel.send("Invalid mention/no mention.")}


        let roles = ['admin', 'moderator']
        let role = message.guild.roles.cache.find(role => role.name === '✧ lit adminss !')


        if(args[0] === roles[0]){message.guild.member(member).roles.add(role); return message.channel.send(`Successfully gave role, ${role} to ${member}.`)}
        

        if(args[0] === role[0]){message.guild.member(member).roles.add(role1)}
        message.channel.send(`Successfully gave role, ${role} to ${member}.`)


    }

}