module.exports = {
    name: 'shame',
    execute(message, args){

        let id = message.guild.member(message.author).id === '484644637420552202'
        if(!id){return message.channel.send("Incorrect userid.")}
         
        message.channel.send("adf")


    }
}