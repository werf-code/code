module.exports = {
  name: 'poll',
  execute(message, args){
    if(message.guild.member(message.author).hasPermission['ADMINITRATOR'])

    var pollReason = args[0, 1, 2, 3];
    if(args[4]) {return message.channel.send("Too many arguments")}



    message.bulkDelete(1)
    message.channel.send(`${pollReason}`)
    message.react("⬇️")
    message.react("⬆️")
  }
}
