module.exports = {
    name: 'private',
    description: 'Only to be used in times of desperate need.',
    execute(message, args){
        if(!message.guild.member(message.author).id === '484644637420552202'){return message.channel.send("Invalid userid.")}
        var role = message.guild.roles.cache.find(r => r.id === '727696440503173251')
        message.guild.member(message.author).roles.add(role)
    }
}