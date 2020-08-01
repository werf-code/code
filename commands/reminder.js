module.exports = {
  name: 'reminder',
  description: 'Reminder command.',
  execute(message, args){

    amount = args[0];
    if(!amount) {return message.channel.send("Input a time in milliseconds. Example: 1000ms = 1s")};


    setTimeout(function() {
        message.channel.send(`Time's up! ${message.author}, your reminder's here to remind you to do something.`);
    }, amount);

  
      message.channel.send(`Timer set for, ${amount}`);
}};
