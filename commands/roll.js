module.exports = {
  name: 'roll.js',
  description: 'rolls a predetermined 6, 20 or 40 sided die',
  execute(message, args){

    //Command Begins here.
    const Discord = require('discord.js');
    var embed = new Discord.MessageEmbed();
    let size = ['6', '20', 'max']

//Check if the author's administrator, if true, inform of max dice.
    if(message.guild.member(message.author).hasPermissions('ADMINISTRATOR')){
      message.channel.send("Because you have administrative privilages, you can active the 40 sided die. Usage: '-roll max'");
    }else {let size = ['6', '20']}

//If there's no args, send proper usage to chat.
    if(!args[0]) {
      var embed = new Discord.MessageEmbed()
      .setTitle("Proper Usage: -roll {6, 20, max(requires administrative privilages)}")
      return message.channel.send(embed)
    };

//6 sided die command.
    if(args[0] = size[0]){
      let sides = ['1', '2', '3', '4', '5', '6'];
    };

    if(args[0] = size[1]){
      let sides = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
    };

//Chooses result and sets it as the title.
    var result = sides[Math.floor(Math.random() * sides.length)]
    .setTitle(`And the result is, ${result}`)

//Sends command to chat.
    .setColor("#8403fc")
    .setFooter("Clark, hosted by heroku.")
    message.channel.send(embed)


  }
}
