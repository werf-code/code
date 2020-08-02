module.exports = {
  name: 'help',
  execute(message, args){
    if(!args[0]) {return message.channel.send(`Hey, ${message.author}. I don't want to flood the chat with a lengthy list of commands that I have. If you'd like to see the list of commands, you'll need to do it via dm's. If you'd like for this to happen, execute .help -yes in this channel.`)}
    if(args[0] !== '-yes') {return console.log("Someone managed to misspell -yes ;-;")}


    var member = message.guild.member(message.author);
    const Discord = require('discord.js');
    const embed = new Discord.MessageEmbed()
    .setTitle("A list of commands")
    .addField(".shame", "Usage: '.shame {mentioned user}'. Requires userid of bot author. Publically shames the specified user.")
    .addField(".host", "Usage: '.host' Shows how, and where you can start making  your own Discord bot.")
    .addField(".reminder", "Usage: '.reminder {time in milliseconds, 1000 = 1 second}'. Reminds you when the timer runs out.")
    .addField(".role", "Usage: '.role {mod, admin, top} {mentioned user}'. Requires user to have the permission ADMINISTRATOR. Requires command to be executed in the guild Chillis. Gives a specified role to a specified user.")
    .addField(".banish", "Usage: '.banish {mentioned user}'. Requires user to have the role, 'banish role'. Requires command to be executed in the guild Chillis. Removes the specified users roles, then chooses one of 6 realms and gives the specified user the dimentions role.")
    .addField(".poll", "Usage: '.poll {poll question, maximum of 4 words}'. Requires user to have the permission ADMINISTRATOR. Sends a command to the chat in which the command is sent and then reacts to said message with an up and down arrow.")
    .addField(".poll", "Usage: '.help {-yes}'. Displays a list of commands.")
    .addField("Fully private commands", "Can only be executed by the bots author.")
    .addField(".test", "Usage: '.test'. Executes the test command.")
    .addField(".private", "Usage: '.private'. Executes the private command.")
    .setColor("#e3003d")
    message.member.send(embed)
  }
}
