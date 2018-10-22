module.exports.run = async (bot, message, args) => {
	let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
	if(colors.size < 1) return message.channel.send("Non hai colores neste servidor.");

	//let str = args.join(" ");
	//let role = colors.find(role => role.name.toLowerCase() === str.toLowerCase());

	message.channel.send("Aquí hai unha lista de todos os colores do servidor:\n\n" + colors.array().join(" ") + "\n\n Para unirse a un, escribe `+color <NOMBRE_COLOR>`. Por ejemplo, `+color emerald`");

}

module.exports.help = {
    name: "colores"
}