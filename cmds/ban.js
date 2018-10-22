const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
	if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) 
		return message.reply("Non tes permisos para facer eso matao");
	if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) 
		return message.reply("Non teño permisos para facer eso");
	let user = message.mentions.users.first();
	let reason = message.content.split(" ").slice(2).join(" ");
	let general = bot.channels.find("name", "general");

	if(!general) 
		return message.reply("Non atopo o canal general");
	if(message.mentions.users.size < 1) 
		return message.reply("Necesitas mencionar a alguien");
	if(!reason) return message.reply("Añade unha razón");
	if(!message.guild.member(user).bannable) 
		return message.reply("Non podo bannear a alguien cun rango maior ao meu");

	message.guild.member(user).ban(7, user);

	const banembed = new Discord.RichEmbed()
		.setAuthor(`Banneei a ${user.username}`, user.displayAvatarURL)
		.addField("Información do Ban", `**Usuario banneado:** ${user.tag}\n**Moderador:** ${message.author.tag}\n**Razón:** ${reason}`);
		
	general.send({
		embed: banembed
	})
};

module.exports.help = {
    name: "ban"
}