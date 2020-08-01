module.exports = {
    name: 'role',
    execute(message,args){
        if(!message.guild.member(message.author).hasPermission(['ADMINISTRATOR'])) {return message.channel.send("Insufficient permissions.")}


        let member = message.mentions.users.first()
        if(!member) {return message.channel.send("Invalid mention/no mention.")}


        let roles = ['admin', 'moderator', 'top']
        let role = message.guild.roles.cache.find(role => role.name === '✧ lit adminss !')
        let role1 = message.guild.roles.cache.find(role => role.id === '727697080679923832')
        let role2 = message.guild.roles.cache.find(role => role.id === '731502012209954919')

        if(args[0] === roles[0]){message.guild.member(member).roles.add(role); console.log("Admin 1 added"); return message.channel.send(`Successfully gave role, ${role} to ${member}.`)}


        if(args[0] === roles[1]){message.guild.member(member).roles.add(role1); return message.channel.send(`Successfully gave role, ${role1} to ${member}.`)}

        if(args[0] === roles[2]){message.guild.member(member).roles.add(role2)}
    }

}
