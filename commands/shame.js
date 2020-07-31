module.exports = {
    name: 'shame',
    execute(message, args){
         if(message.guild.member(message.author).id !== '484644637420552202')
        let mention = message.mentions.users.first();
        if(!mention) return message.channel.send("Invalid mention/no mention.");

        message.channel.bulkDelete(1)
        message.channel.send(`Shame on you, ${mention}`)
        message.channel.send(`Hey everyoone, you should publically shame ${mention}`)
        message.channel.send("SHAME! SHAME! SHAME!")

    }
}
