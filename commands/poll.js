module.exports = {
  name: 'poll',
  execute(message, args){
    if(message.guild.member(message.author).hasPermission['ADMINITRATOR'])


var reasoning = args[0];
message.channel.send(reasoning)
    message.react("⬇️")
    message.react("⬆️")
  }
}
