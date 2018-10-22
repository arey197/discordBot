const snek = module.require("snekfetch");
const api = "http://aws.random.cat//meow";

module.exports.run = async (bot, message, args) => {
	let msg = await message.channel.send("Buscando algún gato...");

	let file = (await snek.get(api)).body.file;
	if(!file) return message.channel.send("Non atopei un gato, pero proba outra vez si eso");

	await message.channel.send({files: [
    		{
    			attachment: file,
    			name: file.split("/").pop()
    		}
    	]});

    	msg.delete();

}

module.exports.help = {
    name: "cat"
}