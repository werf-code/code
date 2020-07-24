module.exports = {
    name: 'shame',
    execute(message, args){
        let idlist = (['605366562198913034', '484644637420552202'])
        let id = message.guild.member(message.author).id === idlist
        if(!id) return message.channel.send("Incorrect userid.");
        
        let mention = message.mentions.users.first();
        if(!mention) return message.channel.send("Invalid mention/no mention.");

        message.channel.bulkDelete(1)
        message.channel.send(`Shame on you, ${mention}`);


    }
}