module.exports = {
    name: 'host',
    execute(message, args){
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle("Where and how to make a discord bot.")
        .addField("Follow this guide:", "https://discordjs.guide/")
        .addField("Upload your files to github:", "https://github.com/")
        .addField("Use Heroko to host your bot:", "https://www.heroku.com/")
        .setColor("#FFFFF")
        message.channel.send(embed)
    }
}