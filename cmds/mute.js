const Discord = module.require("discord.js");
const fs = module.require("fs");

module.exports.run = async (bot, message, args) => {
    //Comprobar si o usuario que o ejecuta ten permisos para facelo
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Non tes permiso para facelo");
        //if(message.channel.permissionsFor(message.member).hasPermission("MANAGE_MESSAGES"))
        
        //Obter o usuario mencionado, return si non existe
        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.send("Non especificaches un usuario ou ID!");
        
        //Comprobacións para non poder mutearte a ti mismo/a outros de rango maior
        if(toMute.id === message.author.id) return message.channel.send("Non podes mutearte a ti mismo, subnormal");
        if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("Non podes mutear a un miembro superior, sucio mortal");
        
        let role = message.guild.roles.find(r => r.name === "Muteado por parvo");
        if(!role) {
            try{
             role = await message.guild.createRole({
                name: "Muteado por parvo",
                color: "#000000",
                permissions: []
             });
             message.guild.channels.forEach(async (channel, id) => {
                 await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                 });
             });
         }catch(e) {
             console.log(e.stack);
         } 
        }
        
        if(toMute.roles.has(role.id)) return message.channel.send("Xa está muteado, tampouco te cebes")
        
        bot.mutes[toMute.id] = {
            guild: message.guild.id,
            time: Date.now() + parseInt(args[1]) * 1000
        }

        await toMute.addRole(role);

        fs.writeFile("./mutes.json", JSON.stringify(bot.mutes, null, 4), err => {
            if(err) throw err;
            message.channel.send("Muteado por parvo");
        });
}

module.exports.help = {
    name: "mute"
}