const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
                 .setAuthor(message.author.username)
                 .setDescription("This is the user's info!")
                 .setColor("#9B59B6")
                 .addField("Nombre de usuario completo", `${message.author.username}#${message.author.discriminator}`)
                 .addField("ID", message.author.id)
                 .addField("Creado en", message.author.createdAt);
        
         message.channel.send(embed);
}

module.exports.help = {
    name: "userinfo",
    description: "genera un embed",
    usage: ""
}