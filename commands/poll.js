module.exports = {
  name: 'poll',
  execute(message, args){
    if(message.guild.member(message.author).hasPermission['ADMINITRATOR'])

    var pollReason = args[0, 1, 2, 3];
    if(args[4]) {return message.channel.send("Too many arguments")}
    if(!pollReason) {return message.channel.send("No pollReason")};
    if(!args[1]) {console.log("No 1 arg")}
    if(!args[2]) {console.log("No 2 arg")}
    if(!args[3]) {console.log("No 3 arg")}


    message.bulkDelete(1)
    message.channel.send(`${pollReason}`)
    message.react("⬇️")
    message.react("⬆️")
  }
}
