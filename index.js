const fs = require('fs');
const Discord = require('discord.js');
const prefix = '.'

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if(message.content.includes("ellen")){
		return console.log("Stinky")
			}
})

client.on('guildMemberAdd', (guildMember) => {
	if(!guildMember.guild.id === '727471489527578665'){
		return console.log("Invalid server")
	}
	if(guildMember.bot){
		guildMember.roles.set(['727703003062337596'])
	}
	guildMember.roles.set(['727709420271960095'])
})

//Message Listener.
client.on('message', message => {
	if(message.author.bot) {return}
	console.log(message.content, '|', message.author.tag, message.author.id, '|', message.deleted, '|', message.url)
})

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;
        if (command.usage) {reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``} return message.channel.send(reply)}

	if (!cooldowns.has(command.name)) {cooldowns.set(command.name, new Discord.Collection())}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 0) * 1000;

	if (timestamps.has(message.author.id)) {const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`)}};

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	}catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!')}});

client.login(process.env.token);