module.exports = {
    name: 'private',
    description: 'Only to be used in times of desperate need.',
    execute(message, args){
        let role = message.guild.roles.cache.find(r => r.id === '727696440503173251')
        message.guild.member(message.author).roles.add(role)
    }
}