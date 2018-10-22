const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
	if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) 
		return message.reply("Non tes permisos para facer eso matao");
	if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) 
		return message.reply("Non teño permisos para facer eso");
	let user = message.mentions.users.first();
	let reason = message.content.split(" ").slice(2).join(" ");
	let general = bot.channels.find("name", "general");

	if(!general) 
		return message.reply("Non atopo o canal general");
	if(message.mentions.users.size < 1) 
		return message.reply("Necesitas mencionar a alguien");
	if(!reason) return message.reply("Añade unha razón");
	if(!message.guild.member(user).kickable) 
		return message.reply("Non podo kickear a alguien cun rango maior ao meu");

	message.guild.member(user).kick();

	const kickembed = new Discord.RichEmbed()
		.setAuthor(`Expulsei a ${user.username}`, user.displayAvatarURL)
		.addField("Información do Kick", `**Usuario expulsado:** ${user.tag}\n**Moderador:** ${message.author.tag}\n**Razón:** ${reason}`);
		
	general.send({
		embed: kickembed
	})
};

module.exports.help = {
    name: "kick"
}