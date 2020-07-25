module.exports = {
    name: 'role',
    execute(message,args){
        if(!message.guild.member(message.author).hasPermission(['ADMINISTRATOR'])) {return message.channel.send("Insufficient permissions.")}

        let member = message.mentions.users.first()
        if(!member) {return message.channel.send("Invalid mention/no mention.")}

        let roles = ['admin', 'moderator']
        let role = message.guild.roles.cache.find(role => role.name === '✧ lit adminss !')
        if(args[1] === roles[0]){message.guild.member(member).roles.cache.add(role => role.id === '727704490169335846')}
        message.channel.send(`Successfully gave role, ${role} to ${member}.`)
        console.log(args[1])
    }
}