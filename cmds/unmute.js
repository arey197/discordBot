const fs = require("fs");

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
        //Comprobar si o usuario que o ejecuta ten permisos para facelo
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Non tes permiso para facelo");
        //if(message.channel.permissionsFor(message.member).hasPermission("MANAGE_MESSAGES"))
        
        //Obter o usuario mencionado, return si non existe
        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.send("Non especificaches un usuario ou ID!");
        
        let role = message.guild.roles.find(r => r.name === "Muteado por parvo");
        
        if(!role || !toMute.roles.has(role.id)) return message.channel.send("O usuario non está muteado")
        
        await toMute.removeRole(role);

        delete bot.mutes[toMute.id];

        fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err => {
            if(err) throw err;
            console.log(`I have unmuted ${toMute.user.tag}.`);
        });

        message.channel.send("Desmuteado (por parvo)");
}

module.exports.help = {
    name: "unmute"
}