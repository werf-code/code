module.exports = {
  name: 'reminder',
  description: 'Reminder command.',
  execute(message, args){

    const time = ms(args[0]);
    if(!time) return message.channel.send("invalid time");

    client.setTimeout(() => message.channel.send("time up"), time);
  }
}
